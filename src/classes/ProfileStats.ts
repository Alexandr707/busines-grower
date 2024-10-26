export class ProfileStats{
    subscriptions = 0
    subscribers = 0
    likes = 0

    constructor(s: Partial<ProfileStats> = {}){
        if(s.subscriptions) this.subscriptions = s.subscriptions
        if(s.subscribers) this.subscribers = s.subscribers
        if(s.likes) this.likes = s.likes
    }
}