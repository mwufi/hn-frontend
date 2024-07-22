import { formatDistanceToNow } from "@/components/formatTime";

async function fetchUserProfile(userId) {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/user/${userId}.json`);
    if (!response.ok) {
        throw new Error('Failed to fetch user profile');
    }
    return await response.json();
}

/* 
sample response
{"about":"Twitter: @kinglycrow\nThreads: @1tbutler<p>Email: ian t butler 0 1 @ gmail.com\nBusiness: ian @ bismuth.cloud<p>Check out our cloud platform for launching Python backends quickly and painlessly: https:&#x2F;&#x2F;www.bismuth.cloud","created":1549915696,"id":"ianbutler","karma":4771,"submitted":[41028967,41028891,41028118,41027196,40932482,40895504,40880238,40837739,40826730,40745339,40743588,40743582,40743577,40690375,40518757,40443659,40443508,40349912,40349887,40347150,40322094,40282436,40281655,40249353,40232170,40228476,40146126,40136093,39997667,39871774,39856245,39846539,39846454,39843905,39535308,39417319,39414065,39374430,39352799,39337704,39283526,39282414,39282330,39281587,39246095,39244685,39243477,39097517,39034866,39033125,]}

*/

export default async function Page({ params }) {
    const { about, submitted } = await fetchUserProfile(params.id);
    const recentSubmissions = submitted.slice(0, 5);
    const moreSubmissionsCount = submitted.length - recentSubmissions.length;

    const recentSubmissionDetails = await Promise.all(
        recentSubmissions.map(async (submissionId) => {
            const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${submissionId}.json`);
            return await response.json();
        })
    );

    console.log(recentSubmissionDetails)

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{params.id}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and submissions.</p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        {about && <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" dangerouslySetInnerHTML={{ __html: about }}></dd>}
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Recent Submissions</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                {recentSubmissionDetails.map((submission, index) => (
                                    <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                            <span className="ml-2 flex-1 w-0 truncate">{formatDistanceToNow(new Date(submission.time * 1000))}</span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href={`/item?id=${submission.id}`} className="font-medium text-indigo-600 hover:text-indigo-500">
                                                View
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            {moreSubmissionsCount > 0 && (
                                <div className="text-sm text-gray-500 mt-2">
                                    and {moreSubmissionsCount} more submissions...
                                </div>
                            )}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}