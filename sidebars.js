/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  docs: [  
    {
      Core :[
        'core/PlcClient',
        'core/Symbol',
        'core/Array',
        'core/Struct',
      ],
      Block :[
        'block/Attributes',
        { 
          Data:[
          'block/data/DB',
          ],
          Code:[
            'block/code/NetworkBlock',
            'block/code/OB',
            'block/code/FC',
            'block/code/FB',
            {
              Section:[
                'block/code/section/Interface',
                'block/code/section/Temp',
                'block/code/section/Static',
                'block/code/section/Const',
              ]
            },
            {
              Logic:[
                {
                  LAD:[
                    'block/code/language/lad/Basic',
                    'block/code/language/lad/Call',                    
                  ]
                }
              ]
            }
          ]         
        }        
      ],
      Tags:[
        'tags/TagTable',
        'tags/Importer'
      ],
      Structure:[
        'structure/Describer',
        'structure/StructureElement'
      ],
      Client:[
        'client/Importer',
      ],
      Library:[
        'library/ToCsConverter',
      ]
    }    
  ],
};
