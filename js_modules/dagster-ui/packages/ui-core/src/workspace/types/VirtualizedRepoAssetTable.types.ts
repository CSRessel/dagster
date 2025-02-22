// Generated GraphQL types, do not edit manually.

import * as Types from '../../graphql/types';

export type RepoAssetTableFragment = {
  __typename: 'AssetNode';
  id: string;
  groupName: string | null;
  changedReasons: Array<Types.ChangeReason>;
  opNames: Array<string>;
  isSource: boolean;
  isObservable: boolean;
  isExecutable: boolean;
  computeKind: string | null;
  hasMaterializePermission: boolean;
  description: string | null;
  assetKey: {__typename: 'AssetKey'; path: Array<string>};
  partitionDefinition: {__typename: 'PartitionDefinition'; description: string} | null;
  owners: Array<
    {__typename: 'TeamAssetOwner'; team: string} | {__typename: 'UserAssetOwner'; email: string}
  >;
  repository: {
    __typename: 'Repository';
    id: string;
    name: string;
    location: {__typename: 'RepositoryLocation'; id: string; name: string};
  };
};
