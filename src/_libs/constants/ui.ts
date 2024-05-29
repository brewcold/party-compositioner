export default {
  placeholders: {
    searchCharacterName: '캐릭터 이름',
    emptyCard: '',
  },
  titles: {
    preset: '',
  },
  descriptions: {
    presetNum: '프리셋 #',
    presetIsEmpty: '빈 프리셋입니다.',
    presetIsApplied: '번 프리셋이 적용되어 있습니다.',
    preset_party: '공격대 구성: ',
  },
  fallbacks: {
    init: '캐릭터 이름을 검색하거나 좌측 상단의 공격대 프리셋을 불러올 수 있습니다.',
    example: '닉네임 예) 노돌리, 카아안, 클라스, 주다영, 필례, 괴물쥐, 부먹펩시파인애플피자지코, 베베초, 베르앤도',
  },
  buttons: {
    more_info: '상세 스펙',
    initialize: '공격대 리셋',
    search: '찾기',
    tutorial: '도움말',
    inquiry: '문의 및 버그 제보',
    close: '닫기',
    cynergy: '시너지 가이드',
    presetSave: '프리셋 저장',
    presetOverwrite: '프리셋 덮어쓰기',
    presetDelete: '프리셋 삭제',
  },
  tutorial: [
    '캐릭터 이름을 검색해 최대 16명까지 공격대를 구성할 수 있습니다.',
    '캐릭터 카드를 드래그해 순서를 변경할 수 있습니다',
    '파티 인원이 구성된 상태로 빈 프리셋(배경색이 없는 프리셋)을 클릭하면 프리셋을 저장할 수 있습니다.',
    '저장된 프리셋(배경색이 있는 프리셋)을 클릭하면 프리셋을 적용/삭제하거나 현재 파티 구성으로 프리셋을 업데이트할 수 있습니다.',
    '브라우저 사용 기록을 초기화하면 저장된 프리셋이 모두 사라집니다.',
    '시너지 최적화 기능은 설문 수집 이후에 적용될 예정입니다.',
    '제보 및 문의는 lostark.raid.composite (at) gmail.com로 보내 주시면 확인 후 반영하겠습니다.',
  ],
  cynergy: [
    `현재 캐릭터에 따른 최적 시너지를 조사하는 중입니다.`,
    `*치명피증: 치명타 시 피해 증가입니다. 캐릭터의 치명타 피해 수치와는 상관이 없습니다.`,
    `**끝마: (착용 장비가 악몽인 경우에만) 마나를 순간적으로 회복시키는 도화가와, 트라이포드로 마나 회복 시너지를 선택한 서머너와 상성이 좋지 않습니다. 악몽 세트의 '끝없는 마나' 옵션을 최대한 활용해야 하는 경우로 현재 세팅이 악몽이 아니라면 끝마딜러가 아닙니다.`,
  ],
};
