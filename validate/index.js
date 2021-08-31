function validateEmail(req, res, next) {
    const { email } = req.body;
    const re = /\S+@\S+\.\S+/;
    if (!email || email === '') {
       return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!re.test(String(email).toLowerCase())) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }

    next();
    }
    function validatePassword(req, res, next) {
    const { password } = req.body;
    if (!password || password === '') {
       return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }

    next();
    }

    module.exports = {
        validateEmail,
        validatePassword,
        }; 