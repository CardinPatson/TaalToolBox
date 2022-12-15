import { apiClient } from './apiClient'
import type { LevelMap } from '@/types/map'

export default {
  async setLevelMap(payload: LevelMap) {
    console.log(payload)
    return await apiClient.post('/level-map', {
      mapPayload: payload,
      dadPayload: { leveldata: '' }
    })
  },

  getLevelMap() {
    return apiClient.get('/level-map')
  },

  async setDadLevelMap(mapPayload: LevelMap, payload: { leveldata: string }) {
    return apiClient.post('/level-map', { mapPayload: mapPayload, dadPayload: payload })
  }
}
