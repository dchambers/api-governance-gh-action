import core from '@actions/core'
import github from '@actions/github'

const run = async () => {
  try {
    const myInput = core.getInput('myInput')
    core.debug(`Hello ${myInput} from inside a container`)

    // Get github context data
    const context = github.context
    console.log(
      `We can even get context data, like the repo: ${context.repo.repo}`,
    )
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    } else {
      core.setFailed(JSON.stringify(error))
    }
  }
}

run()
