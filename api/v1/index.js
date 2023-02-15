const express = require('express');
const router = express.Router();
const debug = require('debug');
const log = debug('integration-service:index:');

const IndexService = require('../../services/index');

const { isVerified } = require('../../middlewares/is_verified');

router.post('/lapdumas', async (req, res) => {
    const lapdumasData = req.body;

    const result = await IndexService.CreateLapdumas(lapdumasData);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.post('/lapdumas/file', async (req, res) => {
    const lapdumasData = req.body;

    const result = await IndexService.CreateLapdumasFiles(lapdumasData);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.post('/penyelidikan', async (req, res) => {
    const penyelidikanData = req.body;

    const result = await IndexService.CreatePenyelidikan(penyelidikanData);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.post('/penyelidikan/file', async (req, res) => {
    const penyelidikanData = req.body;

    const result = await IndexService.CreatePenyelidikanFiles(penyelidikanData);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.post('/penyelidikan/jaksa', async (req, res) => {
    const penyelidikanData = req.body;

    const result = await IndexService.CreatePenyelidikanJaksa(penyelidikanData);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.post('/penyidikan', async (req, res) => {
    const penyidikanData = req.body;

    const result = await IndexService.CreatePenyidikan(penyidikanData);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.post('/penyidikan/file', async (req, res) => {
    const penyidikanData = req.body;

    const result = await IndexService.CreatePenyidikanFiles(penyidikanData);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.post('/penyidikan/jaksa', async (req, res) => {
    const penyidikanData = req.body;

    const result = await IndexService.CreatePenyidikanJaksa(penyidikanData);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.post('/prapenuntutan', async (req, res) => {
    const penuntutanData = req.body;

    const result = await IndexService.CreatePrapenuntutan(penuntutanData);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.post('/prapenuntutan/file', async (req, res) => {
    const penuntutanData = req.body;

    const result = await IndexService.CreatePrapenuntutanFiles(penuntutanData);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.post('/prapenuntutan/jaksa', async (req, res) => {
    const penuntutanData = req.body;

    const result = await IndexService.CreatePrapenuntutanJaksa(penuntutanData);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.get('/lapdumas', [isVerified], async (req, res) => {
    const user = req.user;

    const result = await IndexService.GetLapdumas(user);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.get('/penyelidikan', [isVerified], async (req, res) => {
    const user = req.user;

    const result = await IndexService.GetPenyelidikan(user);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.get('/penyidikan', [isVerified], async (req, res) => {
    const user = req.user;

    const result = await IndexService.GetPenyidikan(user);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.get('/prapenuntutan', [isVerified], async (req, res) => {
    const user = req.user;

    const result = await IndexService.GetPrapenuntutan(user);
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.get('/jaksa_penyelidikan', [isVerified], async (req, res) => {
    const result = await IndexService.GetJaksaPenyelidikan();
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.get('/jaksa_penyidikan', [isVerified], async (req, res) => {
    const result = await IndexService.GetJaksaPenyidikan();
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

router.get('/jaksa_prapenuntutan', [isVerified], async (req, res) => {
    const result = await IndexService.GetJaksaPrapenuntutan();
    log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

module.exports = router;