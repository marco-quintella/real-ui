import type { MaybeRefOrGetter } from 'vue'
import { computed, toValue } from 'vue'
import { isDefined } from '../utils/defined'

export interface RatioProps {
  ratio?: string | number
}

export function useRatio(
  ratioProp: MaybeRefOrGetter<RatioProps['ratio']>,
  naturalRatioProp: MaybeRefOrGetter<RatioProps['ratio']>,
) {
  return computed(() => {
    const ratioPropValue = toValue(ratioProp)
    const naturalRatioValue = toValue(naturalRatioProp)
    const ratio = Number(
      isDefined(ratioPropValue) ? ratioPropValue : isDefined(naturalRatioValue) ? naturalRatioValue : undefined,
    )
    return !Number.isNaN(ratio) && ratio > 0
      ? {
          paddingBottom: `${100 / ratio}%`,
        }
      : undefined
  })
}
