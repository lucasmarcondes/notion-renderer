import { ref } from "vue"
import { pages } from "./config"

const currentPage = ref(pages[0])

export const useStore = () => {

  const setCurrentPage = page => {
    currentPage.value = page
  }

  return { currentPage, setCurrentPage }
}