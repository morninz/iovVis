/*
 * Copyright © 2016-2018 The BeiDouApp Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable import/no-unresolved, import/default */

import IntegratedTemplate from './integrated.tpl.html';

/* eslint-enable import/no-unresolved, import/default */

/*@ngInject*/
export default function IntegratedRoutes($stateProvider) {
    
    $stateProvider
        .state('home.integrated', {
            url: '/integrated',
            module: 'private',
            auth: ['SYS_ADMIN', 'TENANT_ADMIN', 'CUSTOMER_USER'],
            views: {
                "content@home": {
                    templateUrl: IntegratedTemplate,
                    controllerAs: 'vm',
                    controller: 'IntegratedController'
                }
            },
            data: {
                pageTitle: 'home.home'
            },
            ncyBreadcrumb: {
                label: '{"icon": "home", "label": "home.home"}',
                icon: 'home'
            }
        });
}