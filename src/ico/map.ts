// map.ts
export const icoSets = ['iconoir', 'lucide', 'mdi', 'pixelarticons']
interface IcoMap {
  [key: string]: {
    [set: string]: string
  }
}

export const map: IcoMap = {
  add: {
    iconoir: 'i-iconoir-plus',
    lucide: 'i-lucide-plus',
    mdi: 'i-mdi-add',
    pixelarticons: 'i-pixelarticons-plus',
  },
  alert: {
    iconoir: 'i-iconoir-warning-triangle',
    lucide: 'i-lucide-alert-triangle',
    mdi: 'i-mdi-alert',
    pixelarticons: 'i-pixelarticons-alert',
  },
  'align-bottom': {
    iconoir: 'i-iconoir-comp-align-bottom',
    lucide: 'i-lucide-align-end-horizontal',
    mdi: 'i-mdi-align-vertical-bottom',
    pixelarticons: 'i-pixelarticons-layout-align-bottom',
  },
  'align-center': {
    iconoir: 'i-iconoir-align-horizontal-centers',
    lucide: 'i-lucide-align-center',
    mdi: 'i-mdi-align-horizontal-center',
    pixelarticons: 'i-pixelarticons-layout-distribute-horizontal',
  },
  'align-left': {
    iconoir: 'i-iconoir-comp-align-left',
    lucide: 'i-lucide-align-start-vertical',
    mdi: 'i-mdi-align-horizontal-left',
    pixelarticons: 'i-pixelarticons-layout-align-left',
  },
  'align-middle': {
    iconoir: 'i-iconoir-align-vertical-centers',
    lucide: 'i-lucide-align-vertical-center',
    mdi: 'i-mdi-align-vertical-center',
    pixelarticons: 'i-pixelarticons-layout-distribute-vertical',
  },
  'align-right': {
    iconoir: 'i-iconoir-comp-align-right',
    lucide: 'i-lucide-align-end-vertical',
    mdi: 'i-mdi-align-horizontal-right',
    pixelarticons: 'i-pixelarticons-layout-align-right',
  },
  'align-text-center': {
    iconoir: 'i-iconoir-align-center',
    lucide: 'i-lucide-align-center',
    mdi: 'i-mdi-format-align-center',
    pixelarticons: 'i-pixelarticons-align-center',
  },
  'align-text-justify': {
    iconoir: 'i-iconoir-align-justify',
    lucide: 'i-lucide-align-justify',
    mdi: 'i-mdi-format-align-justify',
    pixelarticons: 'i-pixelarticons-align-justify',
  },
  'align-text-left': {
    iconoir: 'i-iconoir-align-left',
    lucide: 'i-lucide-align-left',
    mdi: 'i-mdi-format-align-left',
    pixelarticons: 'i-pixelarticons-align-left',
  },
  'align-text-right': {
    iconoir: 'i-iconoir-align-right',
    lucide: 'i-lucide-align-right',
    mdi: 'i-mdi-format-align-right',
    pixelarticons: 'i-pixelarticons-align-right',
  },
  'align-top': {
    iconoir: 'i-iconoir-comp-align-top',
    lucide: 'i-lucide-align-start-horizontal',
    mdi: 'i-mdi-align-vertical-top',
    pixelarticons: 'i-pixelarticons-layout-align-top',
  },
  archive: {
    iconoir: 'i-iconoir-archive',
    lucide: 'i-lucide-archive',
    mdi: 'i-mdi-archive',
    pixelarticons: 'i-pixelarticons-archive',
  },
  'arrow-down': {
    iconoir: 'i-iconoir-arrow-down',
    lucide: 'i-lucide-arrow-down',
    mdi: 'i-mdi-arrow-down',
    pixelarticons: 'i-pixelarticons-arrow-down',
  },
  'arrow-left': {
    iconoir: 'i-iconoir-arrow-left',
    lucide: 'i-lucide-arrow-left',
    mdi: 'i-mdi-arrow-left',
    pixelarticons: 'i-pixelarticons-arrow-left',
  },
  'arrow-right': {
    iconoir: 'i-iconoir-arrow-right',
    lucide: 'i-lucide-arrow-right',
    mdi: 'i-mdi-arrow-right',
    pixelarticons: 'i-pixelarticons-arrow-right',
  },
  'arrow-up': {
    iconoir: 'i-iconoir-arrow-up',
    lucide: 'i-lucide-arrow-up',
    mdi: 'i-mdi-arrow-up',
    pixelarticons: 'i-pixelarticons-arrow-up',
  },
  artboard: {
    iconoir: 'i-iconoir-frame-alt',
    lucide: 'i-lucide-frame',
    mdi: 'i-mdi-artboard',
    pixelarticons: 'i-pixelarticons-frame',
  },
  at: {
    iconoir: 'i-iconoir-at-sign',
    lucide: 'i-lucide-at-sign',
    mdi: 'i-mdi-at',
    pixelarticons: 'i-pixelarticons-at',
  },
  attach: {
    iconoir: 'i-iconoir-attachment',
    lucide: 'i-lucide-link-2',
    mdi: 'i-mdi-attachment',
    pixelarticons: 'i-pixelarticons-attach',
  },
  book: {
    iconoir: 'i-iconoir-book',
    lucide: 'i-lucide-book',
    mdi: 'i-mdi-book',
    pixelarticons: 'i-pixelarticons-book',
  },
  bookmark: {
    iconoir: 'i-iconoir-bookmark',
    lucide: 'i-lucide-bookmark',
    mdi: 'i-mdi-bookmark',
    pixelarticons: 'i-pixelarticons-bookmark',
  },
  briefcase: {
    iconoir: 'i-iconoir-suitcase',
    lucide: 'i-lucide-briefcase',
    mdi: 'i-mdi-briefcase',
    pixelarticons: 'i-pixelarticons-briefcase',
  },
  building: {
    iconoir: 'i-iconoir-building',
    lucide: 'i-lucide-building',
    mdi: 'i-mdi-building',
    pixelarticons: 'i-pixelarticons-building',
  },
  bus: {
    iconoir: 'i-iconoir-bus',
    lucide: 'i-lucide-bus',
    mdi: 'i-mdi-bus',
    pixelarticons: 'i-pixelarticons-bus',
  },
  cake: {
    iconoir: 'i-iconoir-birthday-cake',
    lucide: 'i-lucide-cake',
    mdi: 'i-mdi-cake',
    pixelarticons: 'i-pixelarticons-cake',
  },
  calculator: {
    iconoir: 'i-iconoir-calculator',
    lucide: 'i-lucide-calculator',
    mdi: 'i-mdi-calculator',
    pixelarticons: 'i-pixelarticons-calculator',
  },
  calendar: {
    iconoir: 'i-iconoir-calendar',
    lucide: 'i-lucide-calendar',
    mdi: 'i-mdi-calendar',
    pixelarticons: 'i-pixelarticons-calendar',
  },
  'calendar-add': {
    iconoir: 'i-iconoir-calendar-plus',
    lucide: 'i-lucide-calendar-plus',
    mdi: 'i-mdi-calendar-add',
    pixelarticons: 'i-pixelarticons-calendar-plus',
  },
  camera: {
    iconoir: 'i-iconoir-camera',
    lucide: 'i-lucide-camera',
    mdi: 'i-mdi-camera',
    pixelarticons: 'i-pixelarticons-camera',
  },
  car: {
    iconoir: 'i-iconoir-car',
    lucide: 'i-lucide-car',
    mdi: 'i-mdi-car',
    pixelarticons: 'i-pixelarticons-car',
  },
  chat: {
    iconoir: 'i-iconoir-message',
    mdi: 'i-mdi-chat',
    lucide: 'i-lucide-message-circle',
    pixelarticons: 'i-pixelarticons-chat',
  },
  'chevron-down': {
    iconoir: 'i-iconoir-nav-arrow-down',
    lucide: 'i-lucide-chevron-down',
    mdi: 'i-mdi-chevron-down',
    pixelarticons: 'i-pixelarticons-chevron-down',
  },
  'chevron-left': {
    iconoir: 'i-iconoir-nav-arrow-left',
    lucide: 'i-lucide-chevron-left',
    mdi: 'i-mdi-chevron-left',
    pixelarticons: 'i-pixelarticons-chevron-left',
  },
  'chevron-right': {
    iconoir: 'i-iconoir-nav-arrow-right',
    lucide: 'i-lucide-chevron-right',
    mdi: 'i-mdi-chevron-right',
    pixelarticons: 'i-pixelarticons-chevron-right',
  },
  'chevron-up': {
    iconoir: 'i-iconoir-nav-arrow-up',
    lucide: 'i-lucide-chevron-up',
    mdi: 'i-mdi-chevron-up',
    pixelarticons: 'i-pixelarticons-chevron-up',
  },
  circle: {
    iconoir: 'i-iconoir-circle',
    lucide: 'i-lucide-circle',
    mdi: 'i-mdi-circle',
    pixelarticons: 'i-pixelarticons-circle',
  },
  clock: {
    iconoir: 'i-iconoir-clock',
    lucide: 'i-lucide-clock',
    mdi: 'i-mdi-clock',
    pixelarticons: 'i-pixelarticons-clock',
  },
  close: {
    iconoir: 'i-iconoir-xmark',
    lucide: 'i-lucide-x',
    mdi: 'i-mdi-close',
    pixelarticons: 'i-pixelarticons-close',
  },
  cloud: {
    iconoir: 'i-iconoir-cloud',
    lucide: 'i-lucide-cloud',
    mdi: 'i-mdi-cloud',
    pixelarticons: 'i-pixelarticons-cloud',
  },
  code: {
    iconoir: 'i-iconoir-code',
    lucide: 'i-lucide-code',
    mdi: 'i-mdi-code',
    pixelarticons: 'i-pixelarticons-code',
  },
  comment: {
    iconoir: 'i-iconoir-message-text',
    lucide: 'i-lucide-message-square-text',
    mdi: 'i-mdi-comment',
    pixelarticons: 'i-pixelarticons-comment',
  },
  copy: {
    iconoir: 'i-iconoir-copy',
    lucide: 'i-lucide-copy',
    mdi: 'i-mdi-content-copy',
    pixelarticons: 'i-pixelarticons-copy',
  },
  'credit-card': {
    iconoir: 'i-iconoir-credit-card',
    lucide: 'i-lucide-credit-card',
    mdi: 'i-mdi-credit-card',
    pixelarticons: 'i-pixelarticons-credit-card',
  },
  crop: {
    iconoir: 'i-iconoir-crop',
    lucide: 'i-lucide-crop',
    mdi: 'i-mdi-crop',
    pixelarticons: 'i-pixelarticons-crop',
  },
  download: {
    iconoir: 'i-iconoir-download',
    lucide: 'i-lucide-download',
    mdi: 'i-mdi-download',
    pixelarticons: 'i-pixelarticons-download',
  },
  duplicate: {
    iconoir: 'i-iconoir-copy',
    lucide: 'i-lucide-copy',
    mdi: 'i-mdi-content-duplicate',
    pixelarticons: 'i-pixelarticons-duplicate',
  },
  edit: {
    iconoir: 'i-iconoir-edit',
    lucide: 'i-lucide-edit',
    mdi: 'i-mdi-edit',
    pixelarticons: 'i-pixelarticons-edit',
  },
  heart: {
    iconoir: 'i-iconoir-heart',
    lucide: 'i-lucide-heart',
    mdi: 'i-mdi-heart',
    pixelarticons: 'i-pixelarticons-heart',
  },
  home: {
    iconoir: 'i-iconoir-home',
    lucide: 'i-lucide-home',
    mdi: 'i-mdi-home',
    pixelarticons: 'i-pixelarticons-home',
  },
}

export default map
