import project from '@/schema/project';
import skill from '@/schema/skill';

import content from '@/schema/content';

import fourTwo from '@/schema/block/fourTwo';
import oneTwo from '@/schema/block/oneTwo';
import six from '@/schema/block/six';
import three from '@/schema/block/three';
import twoFour from '@/schema/block/twoFour';
import twoOne from '@/schema/block/twoOne';

const blocks = [oneTwo, twoOne, three, twoFour, fourTwo, six];

const etc = [skill, content, project];

// ---------------------------------------------------

const schemaTypes = [...blocks, ...etc];

export default schemaTypes;
