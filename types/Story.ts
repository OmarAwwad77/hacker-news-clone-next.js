import { Comment } from './ApiStory';
export default interface Story {
	id: number;
	user?: string;
	url: string;
	title: string;
	points: number;
	comments_count: number;
	comments?: Comment[];
	timeAgo?: string;
}
