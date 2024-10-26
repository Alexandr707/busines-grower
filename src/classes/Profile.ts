import { ProfileStats } from "./ProfileStats"

export class Profile{
    id = 0
    firstName = ''
    lastName = ''
    nickName = ''
    photo = ''
    stats: ProfileStats = new ProfileStats

    constructor(p: Partial<Profile> = {}){
        if(p.id) this.id = p.id
        if(p.firstName) this.firstName = p.firstName
        if(p.lastName) this.lastName = p.lastName
        if(p.nickName) this.nickName = p.nickName
        if(p.photo) this.photo = p.photo
        if(p.stats) this.stats = new ProfileStats(p.stats)
    }
}