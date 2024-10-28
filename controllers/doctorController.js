const Doctor = require('../models/Doctor')

const getDoctors = async (req,res) =>{
    try{
        const {specialization, availability,page = 1,limit = 10,search } = req.query;
        const filter = {}
        if (specialization ) filter.specialization=specialization;
        if (availability !== undefined) filter.availability =availability === 'true';
        const query = Doctor.find(filter)
        if (search){
            query.where({name:new RegExp(search,'i')})
        }

        const doctors = await query.skip((page -1) * limit).limit(limit);
        const total = await Doctor.countDocuments(filter);
        res.json({total,doctors})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {getDoctors};