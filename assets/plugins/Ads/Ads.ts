interface Ad {
    imageUrl: string;
    title: string;
    body: string;
    url: string
}

class Ads {
    private static instance: Ads;
    private ads: Ad[];

    private constructor() {

    }

    static getInstance() {
        if(!Ads.instance){
            Ads.instance = new Ads();
        }
        return Ads.instance;
    }

    getAd() {
        return this.ads.pop();
    }
}