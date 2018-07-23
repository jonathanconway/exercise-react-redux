import axios from 'axios'
import { debounce } from 'lodash'

const _fetchReposFromGithub = filterText =>
  axios(`https://api.github.com/users/${filterText}/repos`)

let cancel;

const fetchReposFromGithub = (filterText) => {
  return new Promise((resolve, reject) => {
    if (!!(cancel)) {
      cancel()
    }
    const debounced =
      debounce((filterText) =>
        _fetchReposFromGithub(filterText)
          .then(resolve)
          .catch(reject),
        1000)
    debounced(filterText)
    cancel = debounced.cancel
  });
}

fetchReposFromGithub.cancel = () => !!cancel ? cancel() : undefined

export { fetchReposFromGithub }