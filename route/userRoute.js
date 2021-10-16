const express = require('express');
const router = express.Router();

/**
 6. 유저의 하이라이트 테마 변경(Update)

- 유저 ID를 필수로 받습니다
- 유저가 보유한 테마 ID를 인자로 받습니다.
- 테마가 변경된 이후에는 하이라이트 정보 요청의 응답이 모두 변경된 테마의 색으로 바뀌어야 합니다.

어떤 유저는 하이라이트를 몇 만개씩 하는 경우도 있습니다. 이 점 유의해주세요.

입력 예시

```json
{
  "userId": 12312,
  "themeId": 2,
}    
```

출력 예시

```json
200 OK
```
 * 
 */

router.put('/', (req, res) => {
    res.status(200).json({});
});

module.exports = router;