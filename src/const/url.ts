import qs from 'query-string';
import urlJoin from 'url-join';

import { withBasePath } from '@/utils/basePath';
import { isDev } from '@/utils/env';

import pkg from '../../package.json';
import { INBOX_SESSION_ID } from './session';

export const UTM_SOURCE = 'chat_preview';

export const OFFICIAL_URL = '';
export const OFFICIAL_PREVIEW_URL = '';
export const OFFICIAL_SITE = '';

export const OG_URL = '/og/cover.png?v=1';

export const GITHUB = pkg.homepage;
export const GITHUB_ISSUES = urlJoin(GITHUB, 'issues/new/choose');
export const CHANGELOG = urlJoin(GITHUB, 'blob/main/CHANGELOG.md');
export const DOCKER_IMAGE = '';

export const DOCUMENTS = urlJoin(OFFICIAL_SITE, '/docs');
export const USAGE_DOCUMENTS = urlJoin(DOCUMENTS, '/usage');
export const SELF_HOSTING_DOCUMENTS = urlJoin(DOCUMENTS, '/self-hosting');
export const WEBRTC_SYNC_DOCUMENTS = urlJoin(SELF_HOSTING_DOCUMENTS, '/advanced/webrtc');
export const DATABASE_SELF_HOSTING_URL = urlJoin(SELF_HOSTING_DOCUMENTS, '/server-database');

// use this for the link
export const DOCUMENTS_REFER_URL = `${DOCUMENTS}?utm_source=${UTM_SOURCE}`;

export const WIKI = urlJoin(GITHUB, 'wiki');
export const WIKI_PLUGIN_GUIDE = urlJoin(USAGE_DOCUMENTS, '/plugins/development');
export const MANUAL_UPGRADE_URL = urlJoin(SELF_HOSTING_DOCUMENTS, '/advanced/upstream-sync');

export const BLOG = urlJoin(OFFICIAL_SITE, 'blog');

export const ABOUT = OFFICIAL_SITE;
export const FEEDBACK = pkg.bugs.url;
export const DISCORD = '';
export const PRIVACY_URL = urlJoin(OFFICIAL_SITE, '/privacy');
export const TERMS_URL = urlJoin(OFFICIAL_SITE, '/terms');

export const PLUGINS_INDEX_URL = '';

export const MORE_MODEL_PROVIDER_REQUEST_URL =
  '';

export const MORE_FILE_PREVIEW_REQUEST_URL =
  '';

export const AGENTS_INDEX_GITHUB = '';
export const AGENTS_INDEX_GITHUB_ISSUE = urlJoin(AGENTS_INDEX_GITHUB, 'issues/new');

export const SESSION_CHAT_URL = (id: string = INBOX_SESSION_ID, mobile?: boolean) =>
  qs.stringifyUrl({
    query: mobile ? { session: id, showMobileWorkspace: mobile } : { session: id },
    url: '/chat',
  });

export const imageUrl = (filename: string) => withBasePath(`/images/${filename}`);

export const LOBE_URL_IMPORT_NAME = 'settings';
export const EMAIL_SUPPORT = 'support@lobehub.com';
export const EMAIL_BUSINESS = 'hello@lobehub.com';

export const MEDIDUM = '';
export const X = '';
export const RELEASES_URL = urlJoin(GITHUB, 'releases');

export const mailTo = (email: string) => `mailto:${email}`;

export const AES_GCM_URL = '';
export const BASE_PROVIDER_DOC_URL = '';
export const SITEMAP_BASE_URL = isDev ? '/sitemap.xml/' : 'sitemap';
