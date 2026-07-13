import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TagsListInline from '@theme/TagsListInline';

import EditMetaRow from '@theme/EditMetaRow';

import RelatedLinks from '@site/src/components/RelatedLinks';
import FeedbackWidget from '@site/src/components/FeedbackWidget';

export default function DocItemFooter(): ReactNode {
  const {metadata, frontMatter} = useDoc();
  const {editUrl, lastUpdatedAt, lastUpdatedBy, tags} = metadata;

  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

  const canDisplayFooter =
    canDisplayTagsRow || canDisplayEditMetaRow;

  const relacionados = (frontMatter as {relacionados?: string[]} | undefined)
    ?.relacionados;
  const hasRelated = relacionados && relacionados.length > 0;

  if (!canDisplayFooter && !hasRelated) {
    return (
      <footer className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
        <FeedbackWidget />
      </footer>
    );
  }

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      {canDisplayTagsRow && (
        <div
          className={clsx(
            'row margin-top--sm',
            ThemeClassNames.docs.docFooterTagsRow,
          )}>
          <div className="col">
            <TagsListInline tags={tags} />
          </div>
        </div>
      )}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          className={clsx(
            'margin-top--sm',
            ThemeClassNames.docs.docFooterEditMetaRow,
          )}
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
        />
      )}
      {hasRelated ? <RelatedLinks relacionados={relacionados} /> : null}
      <FeedbackWidget />
    </footer>
  );
}
