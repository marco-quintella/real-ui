import type { type MaybeRefOrGetter, Ref, ref, toValue, watchEffect } from 'vue'
import type { GitHubUser } from '../types'
import { ofetch } from 'ofetch'

interface UseGitHubUser {
  user: Ref<GitHubUser | null>
  isLoading: Ref<boolean>
}

export function useGitHubUser(name: MaybeRefOrGetter<string>): UseGitHubUser {
  const user = ref<GitHubUser | null>(null)
  const isLoading = ref(false)

  watchEffect(async () => {
    if (!toValue(name)) {
      return
    }

    await fetchUser()
  })

  async function fetchUser() {
    isLoading.value = true

    user.value = await ofetch<GitHubUser>(
      `https://api.github.com/users/${toValue(name)}`,
    ).finally(() => {
      isLoading.value = false
    })
  }

  return {
    user,
    isLoading,
  }
}
