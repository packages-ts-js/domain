import { ListRepositoryMock } from "./repository-list.mock"


describe("MooringTypeServices", () => {
    let repoMock: ListRepositoryMock<{id: string, name: string}>

    beforeAll( async ()=> {
        repoMock = new ListRepositoryMock()
    })

    it("list empty",  async () => {
        const result = await repoMock.find()
        expect(result).toStrictEqual([])

    })

    it("save item",  async () => {
        const id = "1"
        const name = "TestMockRepo"
        const result = await repoMock.save( {id:id, name:name} )
        expect(result.id).toBe(id)
        expect(result.name).toBe(name)
    })

    it("list with any",  async () => {
        const id = "1"
        const name = "TestMockRepo"
        const result = await repoMock.find()
        expect(result).toStrictEqual([{id: id, name:name}])

    })

    it("save item",  async () => {
        const id = "1"
        const name = "TestMockRepo2"
        const result = await repoMock.save( {id:id, name:name} )
        expect(result.id).toBe(id)
        expect(result.name).toBe(name)
    })
})
