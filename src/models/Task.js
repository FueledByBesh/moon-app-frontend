export class Task {
  constructor({ id, title } = {}) {
    this.id = id
    this.title = title
  }

  getTaskInfo() {
    console.log(`Task id: ${this.id}`)
    console.log(`Task title: ${this.title}`)
  }
}
