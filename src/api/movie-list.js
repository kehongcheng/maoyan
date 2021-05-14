import request from '@/utils/request'

export function getList(params) {
    return request({
        url: 'https://m.maoyan.com/ajax/movieOnInfoList?token=TUBdgTDdmEHoKkOvzQ-kgzew9AQAAAAASQ0AAPvBTSbHVe5kMUoYJKizev_F0GIkoC4X2DEbtTAmIPGkI7hP9IAkDNRKH6U8FMyKnA&optimus_uuid=3E2DE4B0920C11EBA74621C3B16FB1E9C333F4D7FD6D4B99A0BE99C46C964264&optimus_risk_level=71&optimus_code=10',
        method: 'get',
        params
    })
}