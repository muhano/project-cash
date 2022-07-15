const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('CASH project prototype API server')
})

router.post('/individual-inquiry', (req, res) => {
    const data = {
        CIX_BASE_CIX_NO, 
        CIX_LRPT_STS, 
        CIX_BASE_CIX_CD,
        CIX_BASE_CUST_HNM,
        CIX_BASE_ID_NO,
        CIX_BASE_SEX_CD,
        CIX_BASE_BIRTH_DT,
        CIX_BASE_ADDR_HNM_1,
        CIX_LRPT_RT,
        CIX_LRPT_RW,
        CIX_BASE_POST_NO,
        CIX_LRPT_PROVINCE_CD,
        CIX_LRPT_DATI_II,
        CIX_LRPT_TOWN_TP,
        CIX_LRPT_VILAGE_TP,
        CIX_BASE_CTRY_CD,
        CIX_BASE_MARRIAGE_YN,
        CIX_LRPT_SPOUSE_NAME,
        CIX_LRPT_SPOUSE_ID_NO,
        CIX_LRPT_SPOUSE_BIRTH_DT,
        CIX_LRPT_SEP_ASSET_AGR_YN,
        CIX_BASE_TEL_NO,
        CIX_BASE_EMAIL_ADDR,
        CIX_BASE_MOBILE_NO,
        CIX_BASE_MOBILE_NO_2,
        CIX_BASE_MOBILE_NO_3,
        CIX_LRPT_REL_PARTY_CD
    } = req.body
    // console.log(data.length, '<-----')
    console.log(data, "<------");
    res.status(200).json({message: "response data"});
})



module.exports = router