const appLinks = {
   home:{
      name:'Home',
      link:'/'
   },
   details: {
      name:'Job Details',
      link:'/job/:id',
      asLink: (id: string) => `/job/${id}`
   }
}
export {appLinks}