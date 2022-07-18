const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('CASH project prototype API server')
})

router.post('/individual-inquiry', (req, res) => {
    const {
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
    const data = {CIX_BASE_CIX_NO, 
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
        CIX_LRPT_REL_PARTY_CD};
    console.log(data, '<-----')

    res.status(200).json({message: "response data"});
})

router.post('/corporate-inquiry', (req, res) => {
    const {
        CIX_BASE_CIX_NO, 
        CIX_LRPT_STS, 
        CIX_BASE_CUST_HNM,
        CIX_LRPT_NPWP,
        CIX_LRPT_UPJO_CD_ANTASENA,
        CIX_LRPT_EST_NO,
        CIX_LRPT_RCNT_EST_NO,
        CIX_LRPT_EST_DT,
        CIX_LRPT_RCNT_EST_DT,
        CIX_LRPT_EST_END_DT,
        CIX_LRPT_EST_NOTA,
        CIX_LRPT_RCNT_EST_NOTA,
        CIX_LRPT_ESTB_PLAC,
        CIX_LRPT_CLAC_YM,
        CIX_LRPT_JTC_MIN_NO,
        CIX_LRPT_JTC_MIN_DT,
        CIX_LRPT_ASTATE_GZT_NO,
        CIX_LRPT_ASTATE_GZT_DT,
        CIX_LRPT_STATE_GZT_NO,
        CIX_BASE_ADDR_HNM_1,
        CIX_LRPT_DATI_II,
        CIX_LRPT_TOWN_TP,
        CIX_LRPT_PROVINCE_CD,
        CIX_LRPT_VILAGE_TP,
        CIX_BASE_MAIN_TEL_NO,
        CIX_BASE_FAX_NO,
        CIX_BASE_TEL_NO,
        CIX_BASE_TEL_NO2,
        CIX_BASE_POST_NO,
        CIX_BASE_EMAIL_ADDR,
        CIX_LRPT_CNTCT_PRSN_NM,
        CIX_LRPT_CNTCT_PRSN_TEL_NO,
        CIX_LRPT_SIUP_NO,
        CIX_LRPT_API_APIT_NO,
        CIX_LRPT_SITU_IUT_NO
    } = req.body
    const data = {
        CIX_BASE_CIX_NO, 
        CIX_LRPT_STS, 
        CIX_BASE_CUST_HNM,
        CIX_LRPT_NPWP,
        CIX_LRPT_UPJO_CD_ANTASENA,
        CIX_LRPT_EST_NO,
        CIX_LRPT_RCNT_EST_NO,
        CIX_LRPT_EST_DT,
        CIX_LRPT_RCNT_EST_DT,
        CIX_LRPT_EST_END_DT,
        CIX_LRPT_EST_NOTA,
        CIX_LRPT_RCNT_EST_NOTA,
        CIX_LRPT_ESTB_PLAC,
        CIX_LRPT_CLAC_YM,
        CIX_LRPT_JTC_MIN_NO,
        CIX_LRPT_JTC_MIN_DT,
        CIX_LRPT_ASTATE_GZT_NO,
        CIX_LRPT_ASTATE_GZT_DT,
        CIX_LRPT_STATE_GZT_NO,
        CIX_BASE_ADDR_HNM_1,
        CIX_LRPT_DATI_II,
        CIX_LRPT_TOWN_TP,
        CIX_LRPT_PROVINCE_CD,
        CIX_LRPT_VILAGE_TP,
        CIX_BASE_MAIN_TEL_NO,
        CIX_BASE_FAX_NO,
        CIX_BASE_TEL_NO,
        CIX_BASE_TEL_NO2,
        CIX_BASE_POST_NO,
        CIX_BASE_EMAIL_ADDR,
        CIX_LRPT_CNTCT_PRSN_NM,
        CIX_LRPT_CNTCT_PRSN_TEL_NO,
        CIX_LRPT_SIUP_NO,
        CIX_LRPT_API_APIT_NO,
        CIX_LRPT_SITU_IUT_NO
    }
    // console.log(data.length, '<-----')
    console.log(data, "<------");
    res.status(200).json({message: "response data corporate inquiry"});
})

router.post('/management-data', (req, res) => {
    const {
        CIX_BOD_BOD_NM,
        CIX_BOD_BOD_POS,
        CIX_BOD_BOD_ID_NO,
        CIX_BOD_BOD_ID_TP,
        CIX_BOD_BOD_END_ID_DT,
        CIX_BOD_NPWP,
        CIX_BOD_BOD_CIX_NO,
        CIX_BOD_GENDER,
        CIX_BOD_BOD_ADDRESS,
        CIX_BOD_BOD_TOWN,
        CIX_BOD_BOD_VILAGE,
        CIX_BOD_BOD_DATI_II,
        CIX_BOD_BOD_CITY_NM,
        CIX_BOD_BOD_PROVINCE_CD,
        CIX_BOD_BOD_PEP
    } = req.body
    const data = {
        CIX_BOD_BOD_NM,
        CIX_BOD_BOD_POS,
        CIX_BOD_BOD_ID_NO,
        CIX_BOD_BOD_ID_TP,
        CIX_BOD_BOD_END_ID_DT,
        CIX_BOD_NPWP,
        CIX_BOD_BOD_CIX_NO,
        CIX_BOD_GENDER,
        CIX_BOD_BOD_ADDRESS,
        CIX_BOD_BOD_TOWN,
        CIX_BOD_BOD_VILAGE,
        CIX_BOD_BOD_DATI_II,
        CIX_BOD_BOD_CITY_NM,
        CIX_BOD_BOD_PROVINCE_CD,
        CIX_BOD_BOD_PEP
    };
    console.log(data, '<-----')

    res.status(200).json({message: "response data"});
})

router.post('/shareholder-data', (req, res) => {
    const {
        CIX_SHLDR_STOCK_OWNER_NM,
        CIX_SHLDR_STOCK_NOMINAL,
        CIX_SHLDR_STOCK_OWNERSHIP,
        CIX_SHLDR_RBA_SIGN1,
        CIX_SHLDR_STOCK_ID_NO,
        CIX_SHLDR_STOCK_ID_TP,
        CIX_SHLDR_STOCK_END_ID_DT,
        CIX_SHLDR_STOCK_CIX_NO,
        CIX_SHLDR_STOCK_OWNER_TP,
        CIX_SHLDR_STOCK_GENDER,
        CIX_SHLDR_STOCK_ADDRESS,
        CIX_SHLDR_STOCK_TOWN,
        CIX_SHLDR_STOCK_VILAGE,
        CIX_SHLDR_STOCK_DATI_II,
        CIX_SHLDR_STOCK_CITY_NM,
        CIX_SHLDR_STOCK_PEP
    } = req.body
    const data = {
        CIX_SHLDR_STOCK_OWNER_NM,
        CIX_SHLDR_STOCK_NOMINAL,
        CIX_SHLDR_STOCK_OWNERSHIP,
        CIX_SHLDR_RBA_SIGN1,
        CIX_SHLDR_STOCK_ID_NO,
        CIX_SHLDR_STOCK_ID_TP,
        CIX_SHLDR_STOCK_END_ID_DT,
        CIX_SHLDR_STOCK_CIX_NO,
        CIX_SHLDR_STOCK_OWNER_TP,
        CIX_SHLDR_STOCK_GENDER,
        CIX_SHLDR_STOCK_ADDRESS,
        CIX_SHLDR_STOCK_TOWN,
        CIX_SHLDR_STOCK_VILAGE,
        CIX_SHLDR_STOCK_DATI_II,
        CIX_SHLDR_STOCK_CITY_NM,
        CIX_SHLDR_STOCK_PEP
    };
    console.log(data, '<-----')

    res.status(200).json({message: "response data"});
})



module.exports = router