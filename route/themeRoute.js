const express = require('express');
const router = express.Router();

/**
 7. 유저의 하이라이트 테마 수정 및 생성(Upsert)

- 유저 ID를 필수로 받습니다
- 유저가 보유한 테마 ID를 필수로 받습니다.
- 테마 내 색은 중복되지 않아야 합니다.
- 테마 내 색은 최소 3개, 최대 6개입니다.
- 기존에 있는 테마의 색을 업데이트하는 경우, 기존 색들을 덮어씁니다. 즉 새로 들어오는 색들로 테마의 색이 전부 바뀝니다. 이에 색이 늘어날 수도 있고 줄어들 수도 있습니다. 하이라이트 정보 요청에 대한 응답은 모두 변경된 색으로 바뀌어야 합니다.
    
    ```jsx
    ["colorHex1", "colorHex2", "colorHex3"] →
    ["colorHexA", "colorHexB", "colorHexC", "colorHexD"]
    위의 경우 기존 하이라이트의 1, 2, 3 색은 A, B, C 색으로 바뀌어야 합니다.
    
    ["colorHexA", "colorHexB", "colorHexC", "colorHexD"] →
    ["colorHex1", "colorHex2", "colorHex3"]
    위의 경우 기존 하이라이트의 A, B, C 색은 1, 2, 3 색으로 바뀌어야 합니다.
    매칭되지 않는 색은 바뀐 테마의 첫 번째 색에 매칭됩니다. (D 색은 1 색으로 변경)
    ```
    

어떤 유저는 하이라이트를 몇 만개씩 하는 경우도 있습니다. 이 점 유의해주세요.

- 가산점
    - 테마 간 색 조합의 중복이 없도록 구현

입력 예시

```json
{
  "userId": 12312,
  "theme": {
    "id": 2,
    "colors": ["colorHex1", "colorHex2", "colorHex3", "colorHex4"]
  }
}    
```

출력 예시

```json
200 OK
```
 */

router.put('/', (req, res) => {
    res.status(200).json({});
});

/**
 8. 유저의 하이라이트 테마 삭제(Delete)

- 유저 ID를 필수로 받습니다
- 유저가 보유한 테마 ID를 필수로 받습니다.
- 설정된 테마를 삭제하는 경우 유저의 테마는 기본 테마1로 설정됩니다.
    - 삭제된 테마가 가진 색의 수가 기본 테마1보다 많은 경우, 매칭되지 않는 색은 기본 테마 1의 첫 번째 색으로 매칭합니다.

어떤 유저는 하이라이트를 몇 만개씩 하는 경우도 있습니다. 이 점 유의해주세요.

입력 예시

```json
{
  "userId": 12312,
  "themeId": 3,
}    
```

출력 예시

```json
200 OK
```
 */

router.delete('/', (req, res) => {
    res.status(200).json({});
});

module.exports = router;