export class Post{
    id = 0
    name = ''
    photo = ''
    views = 0
    pinned: boolean = false

    constructor(p: Partial<Post> = {}){
        const keys = Object.keys(p) as Array<keyof Post>
        for (const k of keys) {
            //@ts-ignore
            if(p[k]) this[k] = p[k]
        }
    }
}