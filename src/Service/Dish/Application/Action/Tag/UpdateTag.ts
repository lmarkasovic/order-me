import TagSchema from '../../Schema/CreateTagSchema';

const UpdateTag: unknown = {
  rest: {
    method: 'PATCH',
    path: 'tags/:id',
  },
  params: TagSchema,
  async handler(ctx: any): Promise<void> {
    this.logger.debug(ctx.params);
  },
};

export default UpdateTag;
