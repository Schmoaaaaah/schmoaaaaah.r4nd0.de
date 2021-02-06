import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const state = () => ({
  userschmoaaaaah: {},
  userschmeeeeeme: {},
  postsschmoaaaaah: [],
  postsschmeeeeeme: [],
})

export const mutations = {
  ...vuexfireMutations,
  SET_USERSCHMOAAAAAH_DOCUMENT: (state, userschmoaaaaah) => {
    state.userschmoaaaaah = userschmoaaaaah
  },
  SET_USERSCHMEEEEEME_DOCUMENT: (state, userschmeeeeeme) => {
    state.userschmeeeeeme = userschmeeeeeme
  },
  SET_POSTSSCHMOAAAAAH_DOCUMENT: (state, postsschmoaaaaah) => {
    state.postsschmoaaaaah = postsschmoaaaaah
  },
  SET_POSTSSCHMEEEEEME_DOCUMENT: (state, postsschmeeeeeme) => {
    state.postsschmeeeeeme = postsschmeeeeeme
  },
}

export const actions = {
  binduserschmoaaaaah: firestoreAction(async function ({ bindFirestoreRef }) {
    const ref = this.$fireStore
      .collection('insta_schmoaaaaah_ownprofile')
      .where('username', '==', 'schmoaaaaah')
    await bindFirestoreRef('userschmoaaaaah', ref, { wait: true })
  }),
  unbinduserschmoaaaaah: firestoreAction(function ({ unbindFirestoreRef }) {
    unbindFirestoreRef('userschmoaaaaah', false)
  }),
  binduserschmeeeeeme: firestoreAction(async function ({ bindFirestoreRef }) {
    const ref = this.$fireStore
      .collection('insta_schmeeeeeme_ownprofile')
      .where('username', '==', 'schmeeeeeme')
    await bindFirestoreRef('userschmeeeeeme', ref, { wait: true })
  }),
  unbinduserschmeeeeeme: firestoreAction(function ({ unbindFirestoreRef }) {
    unbindFirestoreRef('userschmeeeeeme', false)
  }),
  bindpostsschmoaaaaah: firestoreAction(async function ({ bindFirestoreRef }) {
    const ref = this.$fireStore
      .collection('insta_schmoaaaaah_post')
      .orderBy('date', 'desc')
    await bindFirestoreRef('postsschmoaaaaah', ref, { wait: true })
  }),
  unbindpostsschmoaaaaah: firestoreAction(function ({ unbindFirestoreRef }) {
    unbindFirestoreRef('postsschmoaaaaah', false)
  }),
  bindpostsschmeeeeeme: firestoreAction(async function ({ bindFirestoreRef }) {
    const ref = this.$fireStore
      .collection('insta_schmeeeeeme_post')
      .orderBy('date', 'desc')
    await bindFirestoreRef('postsschmeeeeeme', ref, { wait: true })
  }),
  unbindpostsschmeeeeeme: firestoreAction(function ({ unbindFirestoreRef }) {
    unbindFirestoreRef('postsschmeeeeeme', false)
  }),
}
export const getters = {
  userschmoaaaaah(state) {
    return state.userschmoaaaaah
  },
  userschmeeeeeme(state) {
    return state.userschmeeeeeme
  },
  postsschmoaaaaah(state) {
    return state.postsschmoaaaaah
  },
  postsschmeeeeeme(state) {
    return state.postsschmeeeeeme
  },
}
