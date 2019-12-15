
exports.createPages = async ({ actions: { createPage }, graphql}) => {
    
    // const hero = await graphql(`
    //     {
    //         allHeroJson{
    //             edges{
    //                 node{
    //                     id
    //                 }
    //             }
    //         }
    //     }
    // `)
    // const produits = await graphql(`
    //     {
    //         allProduitsJson{
    //             edges{
    //               node{
    //                 id
    //                 category
    //               }
    //             }
    //         }
    //     }
    // `)
 
    // hero.data.allHeroJson.edges.forEach( edge => {
    //     const h = edge.node;
    //     createPage({
    //         path: `/produits/${ h.id }`,
    //         component: require.resolve("./src/templates/product.js"),
    //         context: { id: h.id }
    //     })
    // })

    createPage({
        path: `/nos-services`,
        component: require.resolve("./src/templates/product.js")
    })

    // createPage({
    //     path: `/services`,
    //     component: require.resolve("./src/templates/service.js")
    // })

    createPage({
        path: `/bienfaits`,
        component: require.resolve("./src/templates/bienfaitMaladie.js")
    })
    
}   