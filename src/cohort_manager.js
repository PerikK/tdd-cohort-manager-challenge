import Student from './student.js'
import Cohort from './cohorts.js'

class CohortManager {
  constructor() {
    this.cohortsList = []
  }

  createCohort(name) {
    const newCohort = new Cohort(name)
    const allreadyCreated = this.cohortsList.find((co) => co.name === name)
    if (allreadyCreated) {
      process.stdout.write('A cohort with this name already exists\n')
      throw new Error('A cohort with this name already exists\n')
    } else this.cohortsList.push(newCohort)
  }

  removeCohort(name) {
    const cohortToRemove = this.cohortsList.findIndex((co) => co.name === name)
    if (cohortToRemove !== -1) {
      this.cohortsList.splice(cohortToRemove, 1)
    } else {
      process.stdout.write('No cohort with this name\n')
      throw new Error('No cohort with this name\n')
    }
  }
}

export default CohortManager

// const nm = new CohortManager()
// nm.createCohort(1)

// console.log(nm)
