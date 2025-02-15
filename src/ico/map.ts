// map.ts
export const icoSets = [
  'hugeicons',
  'iconoir',
  'lucide',
  'mdi',
  'pixelarticons',
  'ri',
  'tabler',
]
interface IcoMap {
  [key: string]: {
    [set: string]: string
  }
}

export const map: IcoMap = {
  add: {
    hugeicons: 'i-hugeicons-plus-sign',
    iconoir: 'i-iconoir-plus',
    lucide: 'i-lucide-plus',
    mdi: 'i-mdi-add',
    pixelarticons: 'i-pixelarticons-plus',
    ri: 'i-ri-add-fill',
    tabler: 'i-tabler-plus',
  },
  alert: {
    hugeicons: 'i-hugeicons-alert-02',
    iconoir: 'i-iconoir-warning-triangle',
    lucide: 'i-lucide-alert-triangle',
    mdi: 'i-mdi-alert',
    pixelarticons: 'i-pixelarticons-alert',
    ri: 'i-ri-alert-fill',
    tabler: 'i-tabler-alert-triangle-filled',
  },
  'align-bottom': {
    hugeicons: 'i-hugeicons-align-bottom',
    iconoir: 'i-iconoir-comp-align-bottom',
    lucide: 'i-lucide-align-end-horizontal',
    mdi: 'i-mdi-align-vertical-bottom',
    pixelarticons: 'i-pixelarticons-layout-align-bottom',
    ri: 'i-ri-align-item-bottom-fill',
    tabler: 'i-tabler-layout-align-bottom-filled',
  },
  'align-center': {
    hugeicons: 'i-hugeicons-align-horizontal-center',
    iconoir: 'i-iconoir-align-horizontal-centers',
    lucide: 'i-lucide-align-center',
    mdi: 'i-mdi-align-horizontal-center',
    pixelarticons: 'i-pixelarticons-layout-distribute-horizontal',
    ri: 'i-ri-align-item-horizontal-center-fill',
    tabler: 'i-tabler-layout-align-center-filled',
  },
  'align-left': {
    hugeicons: 'i-hugeicons-align-left',
    iconoir: 'i-iconoir-comp-align-left',
    lucide: 'i-lucide-align-start-vertical',
    mdi: 'i-mdi-align-horizontal-left',
    pixelarticons: 'i-pixelarticons-layout-align-left',
    ri: 'i-ri-align-item-left-fill',
    tabler: 'i-tabler-layout-align-left-filled',
  },
  'align-middle': {
    hugeicons: 'i-hugeicons-align-vertical-center',
    iconoir: 'i-iconoir-align-vertical-centers',
    lucide: 'i-lucide-align-vertical-center',
    mdi: 'i-mdi-align-vertical-center',
    pixelarticons: 'i-pixelarticons-layout-distribute-vertical',
    ri: 'i-ri-align-item-vertical-center-fill',
    tabler: 'i-tabler-layout-align-middle-filled',
  },
  'align-right': {
    hugeicons: 'i-hugeicons-align-right',
    iconoir: 'i-iconoir-comp-align-right',
    lucide: 'i-lucide-align-end-vertical',
    mdi: 'i-mdi-align-horizontal-right',
    pixelarticons: 'i-pixelarticons-layout-align-right',
    ri: 'i-ri-align-item-right-fill',
    tabler: 'i-tabler-layout-align-right-filled',
  },
  'align-text-center': {
    hugeicons: 'i-hugeicons-text-align-center',
    iconoir: 'i-iconoir-align-center',
    lucide: 'i-lucide-align-center',
    mdi: 'i-mdi-format-align-center',
    pixelarticons: 'i-pixelarticons-align-center',
    ri: 'i-ri-align-center',
    tabler: 'i-tabler-align-center',
  },
  'align-text-justify': {
    hugeicons: 'i-hugeicons-text-align-justify-center',
    iconoir: 'i-iconoir-align-justify',
    lucide: 'i-lucide-align-justify',
    mdi: 'i-mdi-format-align-justify',
    pixelarticons: 'i-pixelarticons-align-justify',
    ri: 'i-ri-align-justify',
    tabler: 'i-tabler-align-justified',
  },
  'align-text-left': {
    hugeicons: 'i-hugeicons-text-align-left',
    iconoir: 'i-iconoir-align-left',
    lucide: 'i-lucide-align-left',
    mdi: 'i-mdi-format-align-left',
    pixelarticons: 'i-pixelarticons-align-left',
    ri: 'i-ri-align-left',
    tabler: 'i-tabler-align-left',
  },
  'align-text-right': {
    hugeicons: 'i-hugeicons-text-align-right',
    iconoir: 'i-iconoir-align-right',
    lucide: 'i-lucide-align-right',
    mdi: 'i-mdi-format-align-right',
    pixelarticons: 'i-pixelarticons-align-right',
    ri: 'i-ri-align-right',
    tabler: 'i-tabler-align-right',
  },
  'align-top': {
    hugeicons: 'i-hugeicons-align-top',
    iconoir: 'i-iconoir-comp-align-top',
    lucide: 'i-lucide-align-start-horizontal',
    mdi: 'i-mdi-align-vertical-top',
    pixelarticons: 'i-pixelarticons-layout-align-top',
    ri: 'i-ri-align-item-top-fill',
    tabler: 'i-tabler-layout-align-top-filled',
  },
  archive: {
    hugeicons: 'i-hugeicons-archive',
    iconoir: 'i-iconoir-archive',
    lucide: 'i-lucide-archive',
    mdi: 'i-mdi-archive',
    pixelarticons: 'i-pixelarticons-archive',
    ri: 'i-ri-archive-fill',
    tabler: 'i-tabler-archive',
  },
  'arrow-down': {
    hugeicons: 'i-hugeicons-arrow-down-02',
    iconoir: 'i-iconoir-arrow-down',
    lucide: 'i-lucide-arrow-down',
    mdi: 'i-mdi-arrow-down',
    pixelarticons: 'i-pixelarticons-arrow-down',
    ri: 'i-ri-arrow-down-line',
    tabler: 'i-tabler-arrow-down',
  },
  'arrow-left': {
    hugeicons: 'i-hugeicons-arrow-left-02',
    iconoir: 'i-iconoir-arrow-left',
    lucide: 'i-lucide-arrow-left',
    mdi: 'i-mdi-arrow-left',
    pixelarticons: 'i-pixelarticons-arrow-left',
    ri: 'i-ri-arrow-left-line',
    tabler: 'i-tabler-arrow-left',
  },
  'arrow-right': {
    hugeicons: 'i-hugeicons-arrow-right-02',
    iconoir: 'i-iconoir-arrow-right',
    lucide: 'i-lucide-arrow-right',
    mdi: 'i-mdi-arrow-right',
    pixelarticons: 'i-pixelarticons-arrow-right',
    ri: 'i-ri-arrow-right-line',
    tabler: 'i-tabler-arrow-right',
  },
  'arrow-up': {
    hugeicons: 'i-hugeicons-arrow-up-02',
    iconoir: 'i-iconoir-arrow-up',
    lucide: 'i-lucide-arrow-up',
    mdi: 'i-mdi-arrow-up',
    pixelarticons: 'i-pixelarticons-arrow-up',
    ri: 'i-ri-arrow-up-line',
    tabler: 'i-tabler-arrow-up',
  },
  artboard: {
    hugeicons: 'i-hugeicons-artboard',
    iconoir: 'i-iconoir-frame-alt',
    lucide: 'i-lucide-frame',
    mdi: 'i-mdi-artboard',
    pixelarticons: 'i-pixelarticons-frame',
    ri: 'i-ri-artboard-2-line',
    tabler: 'i-tabler-artboard',
  },
  at: {
    hugeicons: 'i-hugeicons-at',
    iconoir: 'i-iconoir-at-sign',
    lucide: 'i-lucide-at-sign',
    mdi: 'i-mdi-at',
    pixelarticons: 'i-pixelarticons-at',
    ri: 'i-ri-at-line',
    tabler: 'i-tabler-at',
  },
  attach: {
    hugeicons: 'i-hugeicons-attachment',
    iconoir: 'i-iconoir-attachment',
    lucide: 'i-lucide-link-2',
    mdi: 'i-mdi-attachment',
    pixelarticons: 'i-pixelarticons-attachment',
    ri: 'i-ri-attachment-2',
    tabler: 'i-tabler-link',
  },
  battery: {
    hugeicons: 'i-hugeicons-battery-empty',
    iconoir: 'i-iconoir-battery-empty',
    lucide: 'i-lucide-battery',
    mdi: 'i-mdi-battery',
    pixelarticons: 'i-pixelarticons-battery',
    ri: 'i-ri-battery-line',
    tabler: 'i-tabler-battery',
  },
  'battery-charging': {
    hugeicons: 'i-hugeicons-battery-charging-01',
    iconoir: 'i-iconoir-battery-charging',
    lucide: 'i-lucide-battery-charging',
    mdi: 'i-mdi-battery-charging',
    pixelarticons: 'i-pixelarticons-battery-charging',
    ri: 'i-ri-battery-charge-line',
    tabler: 'i-tabler-battery-charging',
  },
  'battery-full': {
    hugeicons: 'i-hugeicons-battery-full',
    iconoir: 'i-iconoir-battery-full',
    lucide: 'i-lucide-battery-full',
    mdi: 'i-mdi-battery-full',
    pixelarticons: 'i-pixelarticons-battery-full',
    ri: 'i-ri-battery-fill',
    tabler: 'i-tabler-battery-4',
  },
  bed: {
    hugeicons: 'i-hugeicons-bed',
    iconoir: 'i-iconoir-bed',
    lucide: 'i-lucide-bed',
    mdi: 'i-mdi-bed',
    pixelarticons: 'i-pixelarticons-bed',
    ri: 'i-ri-hotel-bed-fill',
    tabler: 'i-tabler-bed-filled',
  },
  bluetooth: {
    hugeicons: 'i-hugeicons-bluetooth',
    iconoir: 'i-iconoir-bluetooth',
    lucide: 'i-lucide-bluetooth',
    mdi: 'i-mdi-bluetooth',
    pixelarticons: 'i-pixelarticons-bluetooth',
    ri: 'i-ri-bluetooth-fill',
    tabler: 'i-tabler-bluetooth',
  },
  book: {
    hugeicons: 'i-hugeicons-book-02',
    iconoir: 'i-iconoir-book',
    lucide: 'i-lucide-book',
    mdi: 'i-mdi-book',
    pixelarticons: 'i-pixelarticons-book',
    ri: 'i-ri-book-fill',
    tabler: 'i-tabler-book-2',
  },
  'book-open': {
    hugeicons: 'i-hugeicons-book-open-01',
    iconoir: 'i-iconoir-open-book',
    lucide: 'i-lucide-book-open',
    mdi: 'i-mdi-book-open',
    pixelarticons: 'i-pixelarticons-book-open',
    ri: 'i-ri-book-open-fill',
    tabler: 'i-tabler-book',
  },
  bookmark: {
    hugeicons: 'i-hugeicons-bookmark-01',
    iconoir: 'i-iconoir-bookmark',
    lucide: 'i-lucide-bookmark',
    mdi: 'i-mdi-bookmark',
    pixelarticons: 'i-pixelarticons-bookmark',
    ri: 'i-ri-bookmark-fill',
    tabler: 'i-tabler-bookmark',
  },
  briefcase: {
    hugeicons: 'i-hugeicons-briefcase-02',
    iconoir: 'i-iconoir-suitcase',
    lucide: 'i-lucide-briefcase',
    mdi: 'i-mdi-briefcase',
    pixelarticons: 'i-pixelarticons-briefcase',
    ri: 'i-ri-briefcase-4-fill',
    tabler: 'i-tabler-briefcase',
  },
  building: {
    hugeicons: 'i-hugeicons-building-02',
    iconoir: 'i-iconoir-building',
    lucide: 'i-lucide-building',
    mdi: 'i-mdi-building',
    pixelarticons: 'i-pixelarticons-building',
    ri: 'i-ri-building-fill',
    tabler: 'i-tabler-building',
  },
  bus: {
    hugeicons: 'i-hugeicons-bus-01',
    iconoir: 'i-iconoir-bus',
    lucide: 'i-lucide-bus',
    mdi: 'i-mdi-bus',
    pixelarticons: 'i-pixelarticons-bus',
    ri: 'i-ri-bus-fill',
    tabler: 'i-tabler-bus',
  },
  cake: {
    hugeicons: 'i-hugeicons-birthday-cake',
    iconoir: 'i-iconoir-birthday-cake',
    lucide: 'i-lucide-cake',
    mdi: 'i-mdi-cake',
    pixelarticons: 'i-pixelarticons-cake',
    ri: 'i-ri-cake-fill',
    tabler: 'i-tabler-cake',
  },
  calculator: {
    hugeicons: 'i-hugeicons-calculator-01',
    iconoir: 'i-iconoir-calculator',
    lucide: 'i-lucide-calculator',
    mdi: 'i-mdi-calculator',
    pixelarticons: 'i-pixelarticons-calculator',
    ri: 'i-ri-calculator-line',
    tabler: 'i-tabler-calculator',
  },
  calendar: {
    hugeicons: 'i-hugeicons-calendar-03',
    iconoir: 'i-iconoir-calendar',
    lucide: 'i-lucide-calendar',
    mdi: 'i-mdi-calendar',
    pixelarticons: 'i-pixelarticons-calendar',
    ri: 'i-ri-calendar-line',
    tabler: 'i-tabler-calendar',
  },
  camera: {
    hugeicons: 'i-hugeicons-camera-01',
    iconoir: 'i-iconoir-camera',
    lucide: 'i-lucide-camera',
    mdi: 'i-mdi-camera',
    pixelarticons: 'i-pixelarticons-camera',
    ri: 'i-ri-camera-fill',
    tabler: 'i-tabler-camera',
  },
  car: {
    hugeicons: 'i-hugeicons-car-01',
    iconoir: 'i-iconoir-car',
    lucide: 'i-lucide-car',
    mdi: 'i-mdi-car',
    pixelarticons: 'i-pixelarticons-car',
    ri: 'i-ri-car-fill',
    tabler: 'i-tabler-car',
  },
  cast: {
    hugeicons: 'i-hugeicons-mirroring-screen',
    iconoir: 'i-iconoir-chromecast',
    lucide: 'i-lucide-cast',
    mdi: 'i-mdi-cast',
    pixelarticons: 'i-pixelarticons-cast',
    ri: 'i-ri-cast-line',
    tabler: 'i-tabler-cast',
  },
  chat: {
    hugeicons: 'i-hugeicons-bubble-chat',
    iconoir: 'i-iconoir-message',
    lucide: 'i-lucide-message-circle',
    mdi: 'i-mdi-chat',
    pixelarticons: 'i-pixelarticons-chat',
    ri: 'i-ri-chat-3-line',
    tabler: 'i-tabler-message-circle',
  },
  check: {
    hugeicons: 'i-hugeicons-tick-01',
    iconoir: 'i-iconoir-check',
    lucide: 'i-lucide-check',
    mdi: 'i-mdi-check',
    pixelarticons: 'i-pixelarticons-check',
    ri: 'i-ri-check-fill',
    tabler: 'i-tabler-check',
  },
  'check-double': {
    hugeicons: 'i-hugeicons-tick-double-01',
    iconoir: 'i-iconoir-double-check',
    lucide: 'i-lucide-check-check',
    mdi: 'i-mdi-check-all',
    pixelarticons: 'i-pixelarticons-check-double',
    ri: 'i-ri-check-double-fill',
    tabler: 'i-tabler-checks',
  },
  'chevron-down': {
    hugeicons: 'i-hugeicons-arrow-down-01',
    iconoir: 'i-iconoir-nav-arrow-down',
    lucide: 'i-lucide-chevron-down',
    mdi: 'i-mdi-chevron-down',
    pixelarticons: 'i-pixelarticons-chevron-down',
    ri: 'i-ri-arrow-down-s-line',
    tabler: 'i-tabler-chevron-down',
  },
  'chevron-left': {
    hugeicons: 'i-hugeicons-arrow-left-01',
    iconoir: 'i-iconoir-nav-arrow-left',
    lucide: 'i-lucide-chevron-left',
    mdi: 'i-mdi-chevron-left',
    pixelarticons: 'i-pixelarticons-chevron-left',
    ri: 'i-ri-arrow-left-s-line',
    tabler: 'i-tabler-chevron-left',
  },
  'chevron-right': {
    hugeicons: 'i-hugeicons-arrow-right-01',
    iconoir: 'i-iconoir-nav-arrow-right',
    lucide: 'i-lucide-chevron-right',
    mdi: 'i-mdi-chevron-right',
    pixelarticons: 'i-pixelarticons-chevron-right',
    ri: 'i-ri-arrow-right-s-line',
    tabler: 'i-tabler-chevron-right',
  },
  'chevron-up': {
    hugeicons: 'i-hugeicons-arrow-up-01',
    iconoir: 'i-iconoir-nav-arrow-up',
    lucide: 'i-lucide-chevron-up',
    mdi: 'i-mdi-chevron-up',
    pixelarticons: 'i-pixelarticons-chevron-up',
    ri: 'i-ri-arrow-up-s-line',
    tabler: 'i-tabler-chevron-up',
  },
  circle: {
    hugeicons: 'i-hugeicons-circle',
    iconoir: 'i-iconoir-circle',
    lucide: 'i-lucide-circle',
    mdi: 'i-mdi-circle',
    pixelarticons: 'i-pixelarticons-circle',
    ri: 'i-ri-circle-line',
    tabler: 'i-tabler-circle',
  },
  clock: {
    hugeicons: 'i-hugeicons-clock-01',
    iconoir: 'i-iconoir-clock',
    lucide: 'i-lucide-clock',
    mdi: 'i-mdi-clock',
    pixelarticons: 'i-pixelarticons-clock',
    ri: 'i-ri-time-fill',
    tabler: 'i-tabler-clock',
  },
  close: {
    hugeicons: 'i-hugeicons-cancel-01',
    iconoir: 'i-iconoir-xmark',
    lucide: 'i-lucide-x',
    mdi: 'i-mdi-close',
    pixelarticons: 'i-pixelarticons-close',
    ri: 'i-ri-close-fill',
    tabler: 'i-tabler-x',
  },
  cloud: {
    hugeicons: 'i-hugeicons-cloud',
    iconoir: 'i-iconoir-cloud',
    lucide: 'i-lucide-cloud',
    mdi: 'i-mdi-cloud',
    pixelarticons: 'i-pixelarticons-cloud',
    ri: 'i-ri-cloud-line',
    tabler: 'i-tabler-cloud',
  },
  'cloud-download': {
    hugeicons: 'i-hugeicons-cloud-download',
    iconoir: 'i-iconoir-cloud-download',
    lucide: 'i-lucide-cloud-download',
    mdi: 'i-mdi-cloud-download',
    pixelarticons: 'i-pixelarticons-cloud-download',
    ri: 'i-ri-download-cloud-2-line',
    tabler: 'i-tabler-cloud-download',
  },
  'cloud-upload': {
    hugeicons: 'i-hugeicons-cloud-upload',
    iconoir: 'i-iconoir-cloud-upload',
    lucide: 'i-lucide-cloud-upload',
    mdi: 'i-mdi-cloud-upload',
    pixelarticons: 'i-pixelarticons-cloud-upload',
    ri: 'i-ri-upload-cloud-2-line',
    tabler: 'i-tabler-cloud-upload',
  },
  code: {
    hugeicons: 'i-hugeicons-code',
    iconoir: 'i-iconoir-code',
    lucide: 'i-lucide-code',
    mdi: 'i-mdi-code',
    pixelarticons: 'i-pixelarticons-code',
    ri: 'i-ri-code-fill',
    tabler: 'i-tabler-code',
  },
  coffee: {
    hugeicons: 'i-hugeicons-coffee-02',
    iconoir: 'i-iconoir-coffee-cup',
    lucide: 'i-lucide-coffee',
    mdi: 'i-mdi-coffee',
    pixelarticons: 'i-pixelarticons-coffee',
    ri: 'i-ri-drinks-fill',
    tabler: 'i-tabler-coffee',
  },
  comment: {
    hugeicons: 'i-hugeicons-comment-01',
    iconoir: 'i-iconoir-message-text',
    lucide: 'i-lucide-message-square-text',
    mdi: 'i-mdi-comment',
    pixelarticons: 'i-pixelarticons-comment',
    ri: 'i-ri-message-2-line',
    tabler: 'i-tabler-message',
  },
  copy: {
    hugeicons: 'i-hugeicons-copy-01',
    iconoir: 'i-iconoir-copy',
    lucide: 'i-lucide-copy',
    mdi: 'i-mdi-content-copy',
    pixelarticons: 'i-pixelarticons-copy',
    ri: 'i-ri-file-copy-line',
    tabler: 'i-tabler-copy',
  },
  'credit-card': {
    hugeicons: 'i-hugeicons-credit-card',
    iconoir: 'i-iconoir-credit-card',
    lucide: 'i-lucide-credit-card',
    mdi: 'i-mdi-credit-card',
    pixelarticons: 'i-pixelarticons-credit-card',
    ri: 'i-ri-bank-card-fill',
    tabler: 'i-tabler-credit-card',
  },
  crop: {
    hugeicons: 'i-hugeicons-crop',
    iconoir: 'i-iconoir-crop',
    lucide: 'i-lucide-crop',
    mdi: 'i-mdi-crop',
    pixelarticons: 'i-pixelarticons-crop',
    ri: 'i-ri-crop-line',
    tabler: 'i-tabler-crop',
  },
  delete: {
    hugeicons: 'i-hugeicons-delete-01',
    iconoir: 'i-iconoir-bin',
    lucide: 'i-lucide-trash',
    mdi: 'i-mdi-trash',
    pixelarticons: 'i-pixelarticons-trash-alt',
    ri: 'i-ri-delete-bin-7-line',
    tabler: 'i-tabler-trash-filled',
  },
  download: {
    hugeicons: 'i-hugeicons-download-05',
    iconoir: 'i-iconoir-download',
    lucide: 'i-lucide-download',
    mdi: 'i-mdi-download',
    pixelarticons: 'i-pixelarticons-download',
    ri: 'i-ri-download-line',
    tabler: 'i-tabler-download',
  },
  duplicate: {
    hugeicons: 'i-hugeicons-copy-01',
    iconoir: 'i-iconoir-copy',
    lucide: 'i-lucide-copy',
    mdi: 'i-mdi-content-duplicate',
    pixelarticons: 'i-pixelarticons-duplicate',
    ri: 'i-ri-file-copy-fill',
    tabler: 'i-tabler-copy',
  },
  edit: {
    hugeicons: 'i-hugeicons-edit-02',
    iconoir: 'i-iconoir-edit',
    lucide: 'i-lucide-edit',
    mdi: 'i-mdi-edit',
    pixelarticons: 'i-pixelarticons-edit',
    ri: 'i-ri-edit-fill',
    tabler: 'i-tabler-edit',
  },
  gift: {
    hugeicons: 'i-hugeicons-gift',
    iconoir: 'i-iconoir-gift',
    lucide: 'i-lucide-gift',
    mdi: 'i-mdi-gift',
    pixelarticons: 'i-pixelarticons-gift',
    ri: 'i-ri-gift-line',
    tabler: 'i-tabler-gift',
  },
  grid: {
    hugeicons: 'i-hugeicons-grid-view',
    iconoir: 'i-iconoir-view-grid',
    lucide: 'i-lucide-grid',
    mdi: 'i-mdi-grid',
    pixelarticons: 'i-pixelarticons-grid',
    ri: 'i-ri-grid-line',
    tabler: 'i-tabler-grid',
  },
  headset: {
    hugeicons: 'i-hugeicons-headset',
    iconoir: 'i-iconoir-headset',
    lucide: 'i-lucide-headset',
    mdi: 'i-mdi-headset',
    pixelarticons: 'i-pixelarticons-headset',
    ri: 'i-ri-headphone-fill',
    tabler: 'i-tabler-headphone',
  },
  heart: {
    hugeicons: 'i-hugeicons-favourite',
    iconoir: 'i-iconoir-heart',
    lucide: 'i-lucide-heart',
    mdi: 'i-mdi-heart',
    pixelarticons: 'i-pixelarticons-heart',
    ri: 'i-ri-heart-fill',
    tabler: 'i-tabler-heart',
  },
  home: {
    hugeicons: 'i-hugeicons-home-03',
    iconoir: 'i-iconoir-home',
    lucide: 'i-lucide-home',
    mdi: 'i-mdi-home',
    pixelarticons: 'i-pixelarticons-home',
    ri: 'i-ri-home-2-fill',
    tabler: 'i-tabler-home',
  },
  hourglass: {
    hugeicons: 'i-hugeicons-hourglass',
    iconoir: 'i-iconoir-hourglass',
    lucide: 'i-lucide-hourglass',
    mdi: 'i-mdi-hourglass',
    pixelarticons: 'i-pixelarticons-hourglass',
    ri: 'i-ri-hourglass-line',
    tabler: 'i-tabler-hourglass',
  },
  lightbulb: {
    hugeicons: 'i-hugeicons-bulb',
    iconoir: 'i-iconoir-light-bulb',
    lucide: 'i-lucide-lightbulb',
    mdi: 'i-mdi-lightbulb',
    pixelarticons: 'i-pixelarticons-lightbulb',
    ri: 'i-ri-lightbulb-fill',
    tabler: 'i-tabler-lightbulb',
  },
  link: {
    hugeicons: 'i-hugeicons-link-04',
    iconoir: 'i-iconoir-link',
    lucide: 'i-lucide-link',
    mdi: 'i-mdi-link',
    pixelarticons: 'i-pixelarticons-link',
    ri: 'i-ri-link',
    tabler: 'i-tabler-link',
  },
  list: {
    hugeicons: 'i-hugeicons-left-to-right-list-bullet',
    iconoir: 'i-iconoir-list',
    lucide: 'i-lucide-list',
    mdi: 'i-mdi-format-list-bulleted',
    pixelarticons: 'i-pixelarticons-list',
    ri: 'i-ri-list-unordered',
    tabler: 'i-tabler-list',
  },
  lock: {
    hugeicons: 'i-hugeicons-square-lock-02',
    iconoir: 'i-iconoir-lock',
    lucide: 'i-lucide-lock',
    mdi: 'i-mdi-lock',
    pixelarticons: 'i-pixelarticons-lock',
    ri: 'i-ri-lock-fill',
    tabler: 'i-tabler-lock',
  },
  login: {
    hugeicons: 'i-hugeicons-login-02',
    iconoir: 'i-iconoir-log-in',
    lucide: 'i-lucide-log-in',
    mdi: 'i-mdi-login',
    pixelarticons: 'i-pixelarticons-login',
    ri: 'i-ri-login-box-line',
    tabler: 'i-tabler-login',
  },
  logout: {
    hugeicons: 'i-hugeicons-logout-02',
    iconoir: 'i-iconoir-log-out',
    lucide: 'i-lucide-log-out',
    mdi: 'i-mdi-logout',
    pixelarticons: 'i-pixelarticons-logout',
    ri: 'i-ri-logout-box-line',
    tabler: 'i-tabler-logout',
  },
  mail: {
    hugeicons: 'i-hugeicons-mail-01',
    iconoir: 'i-iconoir-mail',
    lucide: 'i-lucide-mail',
    mdi: 'i-mdi-mail',
    pixelarticons: 'i-pixelarticons-mail',
    ri: 'i-ri-mail-fill',
    tabler: 'i-tabler-mail',
  },
  unlock: {
    hugeicons: 'i-hugeicons-square-unlock-02',
    iconoir: 'i-iconoir-lock-slash',
    lucide: 'i-lucide-unlock',
    mdi: 'i-mdi-lock-open',
    pixelarticons: 'i-pixelarticons-lock-open',
    ri: 'i-ri-lock-unlock-fill',
    tabler: 'i-tabler-lock-open',
  },
  remove: {
    hugeicons: 'i-hugeicons-remove-01',
    iconoir: 'i-iconoir-minus',
    lucide: 'i-lucide-minus',
    mdi: 'i-mdi-minus',
    pixelarticons: 'i-pixelarticons-minus',
    ri: 'i-ri-subtract-fill',
    tabler: 'i-tabler-minus',
  },
  'sign-dollar': {
    hugeicons: 'i-hugeicons-dollar-01',
    iconoir: 'i-iconoir-dollar',
    lucide: 'i-lucide-dollar-sign',
    mdi: 'i-mdi-dollar',
    pixelarticons: 'i-pixelarticons-dollar',
    ri: 'i-ri-money-dollar-circle-line',
    tabler: 'i-tabler-currency-dollar',
  },
  'sign-euro': {
    hugeicons: 'i-hugeicons-euro',
    iconoir: 'i-iconoir-euro',
    lucide: 'i-lucide-euro',
    mdi: 'i-mdi-euro',
    pixelarticons: 'i-pixelarticons-euro',
    ri: 'i-ri-money-euro-circle-line',
    tabler: 'i-tabler-currency-euro',
  },
  sparkles: {
    hugeicons: 'i-hugeicons-sparkles',
    iconoir: 'i-iconoir-sparks-solid',
    lucide: 'i-lucide-sparkles',
    mdi: 'i-mdi-sparkles',
    pixelarticons: 'i-pixelarticons-sun',
    ri: 'i-ri-sparkling-fill',
    tabler: 'i-tabler-sparkles',
  },
  table: {
    hugeicons: 'i-hugeicons-grid-table',
    iconoir: 'i-iconoir-table-2-columns',
    lucide: 'i-lucide-table',
    mdi: 'i-mdi-table',
    pixelarticons: 'i-pixelarticons-table',
    ri: 'i-ri-table-2',
    tabler: 'i-tabler-table',
  },
  trash: {
    hugeicons: 'i-hugeicons-delete-02',
    iconoir: 'i-iconoir-bin-half',
    lucide: 'i-lucide-trash-2',
    mdi: 'i-mdi-delete-variant',
    pixelarticons: 'i-pixelarticons-trash',
    ri: 'i-ri-delete-bin-line',
    tabler: 'i-tabler-trash',
  },
}

export default map
