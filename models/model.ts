

type User = {
    userID: string
    userName: string
    userEmail: string
    userBets: Bet[]
}


type Bet = {
    betUser1ID: string,
    betUser2ID: string,
    betName: string
    betTag: string
    betReward: string
    time: string
}