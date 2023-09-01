const { clients, projects } = require("../sampleData");

const resolvers = {
  Project:{
    // get the client who uploaded this project
    client:(parent)=>{
        return clients.find( client => client.id === parent.clientId )
    }
    },
  Query: {
    // get all clients
    clients: () => {
      return clients;
    },
    // get client by id
    client: (parent, { id }) => {
      return clients.find((client) => client.id === id);
    },
    // get all projects
    projects:()=>{ return projects },

    //get project by id
    project:(parent , { id })=>{ 
        return projects.find((project) => project.id === id);
    }
  },
};

module.exports = resolvers;
