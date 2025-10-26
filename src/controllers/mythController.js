import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import { get } from "mongoose";
import { getErrorMessage } from "../utils/errorUtils.js";
import { mythService } from "../services/index.js";
import { render } from "express/lib/response.js";

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
mythController.get('/myths/report', async (req, res) => {
  try {
    const myths = await mythService.getLatestWithOwner();

    if (myths.length === 0) {
      return res.status(200).json({ message: 'There are no myths and legends!', myths: [] });
    }

    // Format createdAt to DD/MM/YYYY
    const formatted = myths.map(m => ({
      name: m.name,
      origin: m.origin,
      role: m.role,
      symbol: m.symbol,
      era: m.era,
      image: m.imageUrl,
      ownerEmail: m.owner.email,
      createdAt: new Date(m.createdAt).toLocaleDateString('en-GB'), // DD/MM/YYYY
    }));

    res.status(200).render('myths/report', { myths: formatted }).json({ myths: formatted });

  } catch (err) {
    console.error('Error loading report:', err);
    res.status(500).redirect('/').json({ message: 'Error loading report!' });
  }
});

//     res.render('myths/details', { myth, isOwner});//, likedList, islikedList });
//     res.json({});
// });


export default mythController;