import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@patternfly/react-core';
import './auditspage.scss';

import { translate as __ } from '../../../common/I18n';
import { getManualURL } from '../../../common/helpers';
import PageLayout from '../../common/PageLayout/PageLayout';
import AuditsTable from './components/AuditsTable';
import { AUDITS_SEARCH_PROPS } from '../constants';

const AuditsPage = ({
  searchQuery,
  fetchAndPush,
  isLoading,
  hasData,
  ...props
}) => (
  <PageLayout
    header={__('Audits')}
    searchable
    searchProps={AUDITS_SEARCH_PROPS}
    searchQuery={searchQuery}
    isLoading={isLoading && hasData}
    onSearch={search => fetchAndPush({ searchQuery: search, page: 1 })}
    toolbarButtons={
      <Button
        component="a"
        className="btn-docs"
        href={getManualURL('4.1.4Auditing')}
        rel="external noreferrer noopener"
        target="_blank"
        variant="secondary"
      >
        {__(' Documentation')}
      </Button>
    }
  >
    <AuditsTable
      fetchAndPush={fetchAndPush}
      isLoading={isLoading}
      hasData={hasData}
      {...props}
    />
  </PageLayout>
);

AuditsPage.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  fetchAndPush: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasData: PropTypes.bool.isRequired,
};

export default AuditsPage;
