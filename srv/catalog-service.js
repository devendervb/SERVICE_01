class MyService extends cds.ApplicationService {
    init() {
      const { Customer} = this.entities
     /* this.before ('READ', Customer, req => {
        return {
            ID: 1,
            name: "test"
        };
      })*/
     // this.after ('READ', Books, books => {...})
      this.on ('READ', Customer, req => {
        return [{
             ID: 1,
            name: "test"
        },
        {
            ID: 2,
           name: "test2"
       }
    ]
    })
      return super.init()
    }
  }
  module.exports = MyService