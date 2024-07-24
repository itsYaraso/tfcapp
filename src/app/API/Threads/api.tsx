export interface Thread {
    threadId: string;
    communityId: string;
    boardId: string;
    headlineId: string;
    userId: string;
    threadType: string;
    title: string;
    tags: string[];
    summary: string;
    thumbnailImageUrl: string;
    release: string;
    isSticky: boolean;
    isDelete: boolean;
    isComment: boolean;
    isCommentShow: boolean;
    isWebHide: boolean;
    isIosHide: boolean;
    isAosHide: boolean;
    pictureCount: number;
    videoCount: number;
    readCount: number;
    likeCount: number;
    reportCount: number;
    commentCount: number;
    commentCountLive: number;
    safeStatus: string;
    createDate: number;
    responseCount: number;
    modifyDate: number;
    threadModifyDate: number;
    beforeBoardId: string;
    user: User;
    blockStatus: string;
    fileExist: boolean;
}

export interface User {
    userId: string;
    nickname: string;
    isAdmin: boolean;
    gradeId: string;
    gradeGroupId: string;
    userGradeStatus: string;
    reportCount: number;
    badgeAlert: boolean;
}

export async function getThreads(): Promise<Thread[]> {

    const API_KEY = "2cae5a46-057c-5be1-a319-2538c7a201c3";
    const urlString = "https://public.api.nexon.com/";

    const response = await fetch(urlString, {
        method: 'GET',
        headers: {
        }
    })

    const data = await response.json()
    return data as Thread[]
}
