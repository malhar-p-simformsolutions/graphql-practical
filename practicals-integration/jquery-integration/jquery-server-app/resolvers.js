

const Query =
{
   greeting: () => 'Hello GraphQL  From Malhar !!' ,
   sayHello:(root,args,context,info) =>  `Hi ${args.name} GraphQL server says Hello to you!!`
}
module.exports = {Query}