interface GetGroupsResponse {
    result: 1 | 0,
    data?: Group[]
}

interface Group {
    "id": number,
    "name": string,
    "closed": boolean,
    "avatar_color"?: string,
    "members_count": number,
    "friends"?: User[]
}

interface User {
    "first_name": string,
    "last_name": string
}

type selectFilter = {
    "closed": {
        "text": string
        "value": boolean | null
    },

    "avatarColor": {
        "value": string | null
        "text": string
    },
}

type checkBox = {
    isClicked: boolean
}