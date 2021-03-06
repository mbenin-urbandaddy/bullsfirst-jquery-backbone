/**
 * Copyright 2013 Archfirst
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

/**
 * app/pages/orders/OrdersTab
 *
 * @author Naresh Bhatia
 */
define(
    [
        'app/domain/Repository',
        'app/widgets/order-filter/OrderFilterWidget',
        'app/widgets/order-table/OrderTableWidget',
        'keel/BaseView',
        'text!app/pages/orders/OrdersTabTemplate.html'
    ],
    function(Repository, OrderFilterWidget, OrderTableWidget, BaseView, OrdersTabTemplate) {
        'use strict';

        return BaseView.extend({
            tagName: 'section',
            className: 'orders-tab tab clearfix',

            template: {
                name: 'OrdersTabTemplate',
                source: OrdersTabTemplate
            },

            postRender: function() {
                this.addChildren([
                    {
                        id: 'OrderFilterWidget',
                        viewClass: OrderFilterWidget,
                        parentElement: this.$el,
                        options: {
                            collection: Repository.getBrokerageAccounts()
                        }
                    },
                    {
                        id: 'OrderTableWidget',
                        viewClass: OrderTableWidget,
                        parentElement: this.$el,
                        options: {
                            model: Repository.getBrokerageAccounts()
                        }
                    }
                ]);
            }
        });
    }
);