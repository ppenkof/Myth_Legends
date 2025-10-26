import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import { get } from "mongoose";
import { getErrorMessage } from "../utils/errorUtils.js";
import { mythService } from "../services/index.js";

const mythController = Router();

//dashboard
mythController.get('/dashboard', async (req, res) => {
    const myths = await mythService.getAll();

    res.render('myths/dashboard', { myths });
});

mythController.get('/create', (req, res) => {
    res.render('myths/create');
});

//Create
mythController.post('/create', isAuth, async (req, res) => {
    const mythData = req.body;
    const userId = req.user._id;

    try {
        await mythService.create(mythData, userId)
        res.redirect('/myths/dashboard');

    } catch (error) {

        res.render('myths/create', {
        error: getErrorMessage(error),
        myth: mythData,
        });

    }
});

//Get Details
mythController.get('/:mythId/details', isAuth, async (req, res) => {
    const mythId = req.params.mythId;
    const userId = req.user._id;

    const myth = await mythService.getOne(mythId);
    const isOwner = myth.owner.equals(userId);
  
    const likedList = myth.likedList.map(d=>d.email).join(', ');
    const islikedList = myth.likedList.some(d=>d.equals(userId));

    res.render('myths/details', { myth, isOwner, likedList, islikedList });
});

//Edit get
mythController.get('/:mythId/edit', isAuth, async (req, res) => {
    const mythId = req.params.mythId;
    const myth = await mythService.getOne(mythId);
    
    if(!myth.owner.equals(req.user._id)){
        throw {
            message:'Cannot edit myth that you are not owner',
            statusCode:401
        };
    }
    
    res.render('myths/edit', { myth });
});

//Edit post
mythController.post('/:mythId/edit', isAuth, async (req, res) => {
    const mythId = req.params.mythId;
    const mythData = req.body;
    const userId = req.user._id;
    const myth = await mythService.getOne(mythId);

    if(!myth.owner.equals(userId)){
        throw {
            message:'Cannot edit myth that you are not owner',
            statusCode:401
        };
    }

    try {
        await mythService.edit(mythId, mythData);

        res.redirect(`/myths/${mythId}/details`);

    } catch (error) {
        res.render(`myths/edit`, {
        myth:  mythData,
        error: getErrorMessage(error),
        });
    }
   
});

//delete
mythController.get('/:mythId/delete', isAuth, async (req, res) => {
    const  mythId = req.params. mythId;
    const userId = req.user._id;

    await  mythService.remove( mythId, userId);
    res.redirect('/myths/dashboard');
});

//report
// mythController.get('/:mythId/report', isAuth, async (req, res) => {
//     const  mythId = req.params.mythId;
//     const userId = req.user._id;

//     await  mythService.report( mythId, userId);
//     res.redirect(`/myths/${ mythId}/details`);
// });


export default mythController;