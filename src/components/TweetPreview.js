import { debugLog } from '../utils/logger';
import { extractTweetId, normalizeTwitterUrl } from '../utils/twitterUtils';

export function createTweetPreview(twitterUrl) {
    const previewContainer = document.createElement('div');
    previewContainer.className = 'tweet-preview-container';
    
    const tweetFrame = document.createElement('iframe');
    tweetFrame.className = 'tweet-preview-frame';
    
    const normalizedUrl = normalizeTwitterUrl(twitterUrl);
    tweetFrame.src = `https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-0&frame=false&hideCard=false&hideThread=false&id=${extractTweetId(normalizedUrl)}&theme=dark`;
    
    previewContainer.appendChild(tweetFrame);
    return previewContainer;
}

export async function addTweetPreview(cardElement) {
    if (cardElement.querySelector('.tweet-preview-container')) {
        return;
    }

    const twitterLinks = cardElement.querySelectorAll('a[href*="twitter.com"], a[href*="x.com"]');
    
    if (!twitterLinks.length) {
        return;
    }

    const twitterUrl = twitterLinks[0].href;
    debugLog('Found Twitter link:', twitterUrl);

    const previewContainer = createTweetPreview(twitterUrl);
    
    const buttonContainer = cardElement.querySelector('.CZ9XtNP_BJSquWvM6_r8');
    if (buttonContainer) {
        buttonContainer.parentNode.insertBefore(previewContainer, buttonContainer.nextSibling);
    }
}