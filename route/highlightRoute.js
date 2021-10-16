const express = require('express');
const router = express.Router();

const highlightService = require('../service/highlightService')
/**
 1. 하이라이트 저장(Create)

- 유저 ID, pageUrl, colorHex, text 값을 필수로 받습니다
    - colorHex의 값은 현재 설정된 테마 내 색 중에 하나여야 합니다.
- 받은 정보를 기반으로 하이라이트 정보를 저장합니다.
- 페이지 URL을 기반으로 페이지 정보를 DB에 저장한 뒤 응답에 page의 ID 값을 넘깁니다.
- 출력에 저장된 하이라이트 ID를 반환합니다.
- text는 최대 6000자까지 지원합니다.
 */
router.post('/', async (req, res) => {
  const {userId, pageUrl, colorHex, text} = req.body;

  res.status(200).json(await highlightService.add(userId, pageUrl, colorHex, text));
});

/**
 2. 하이라이트 수정(Update)

- 하이라이트 ID와 유저 ID를 필수로 받습니다
- text 혹은 colorHex 둘 중에 하나는 값이 유효해야 합니다.
    - 둘 다 받는 것도 고려합니다.
    - 둘 중에 하나만 있는 경우도 고려합니다.
    - colorHex의 값은 현재 설정된 테마 내 색 중에 하나여야 합니다.
    - text는 최대 6000자까지 지원합니다.
- 입력 받은 정보를 바탕으로 하이라이트를 저장합니다.
 */
router.put('/', async (req, res) => {
  const {highlightId, userId, colorHex, text} = req.body;

  res.status(200).json(await highlightService.mod(highlightId, userId, colorHex, text));
});

/**
 3. 페이지 내 하이라이트 정보 가져오기(Read)

- 유저 ID 값을 필수로 받습니다
- pageID 혹은 pageUrl 둘 중에 하나는 유효한 값을 갖습니다.
    - 두 값 중 하나만 있는 경우도 고려합니다.
    - 두 값 모두 들어오는 경우 pageId를 우선하여 사용합니다.
- 하이라이트의 정렬은 수정된 시간의 역순입니다.
- 수정된 시간이 없는 경우 생성 시간을 대신 사용합니다.
 */

router.get('/', async (req, res) => {
  const {userId, pageId, pageUrl} = req.query;
    
  res.status(200).json(await highlightService.get(userId, {pageId, pageUrl}));
});

/**
 4. 유저가 하이라이트한 정보와 페이지 가져오기(Read)

- 유저 ID를 필수로 받습니다
- 결과 페이지들은 각 페이지 내 하이라이트 중 마지막으로 업데이트된 시간을 사용하여 역순으로 정렬합니다. 만약 하이라이트가 업데이트된 적이 없다면 생성 시간을 사용합니다.
- 각 페이지 내 하이라이트들의 정렬은 3번에 기재된 것과 같습니다.
 */

router.get('/list', (req, res) => {
  const {userId} = req.query

  res.status(200).json({});
});

/**
 5. 하이라이트 삭제(Delete)

- 하이라이트 ID, 유저 ID를 필수로 받습니다
- 삭제된 하이라이트는 모든 조회 관련 API에서 제외되어 반환됩니다.
 */

router.delete('/', (req, res) => {
  const {userId, highlightId} = req.body;

  highlightService.del(userId, highlightId);
    res.status(200);
});

module.exports = router;