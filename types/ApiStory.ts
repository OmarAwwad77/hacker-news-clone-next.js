export interface Comment {
	id: number;
	user: string;
	time_ago: string;
	content: string;
	comments: Comment[];
}

export default interface ApiStory {
	id: number;
	title: string;
	points: number;
	user: string;
	time_ago: string;
	url: string;
	comments: Comment[];
	comments_count: number;
}
