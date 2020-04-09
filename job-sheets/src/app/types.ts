

    export interface Jobs {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    export interface LoginCredentials {

        email: string;
        password: string;

    }

    export interface jobInformation {

        tasks: string[];
        id: number;
        location: number;
        title: string;
    }