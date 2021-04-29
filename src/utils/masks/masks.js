import { createNumberMask, createTextMask } from 'redux-form-input-masks';

export const phoneMask = createTextMask({
    pattern: '+375(99)999-99-99',
    stripMask: false
  });

export const priceMask = createNumberMask({
    suffix: ' BYN'
  })

export const percentMask = createNumberMask({
    suffix: ' %'
})

export const workScheduleMask = createTextMask({
    pattern: '9/9',
    stripMask: false
})