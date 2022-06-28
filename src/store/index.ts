import create from 'zustand'

import todoStore from './todoStore'

const useStore=create(todoStore)



export default useStore

