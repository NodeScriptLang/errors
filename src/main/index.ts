export class ClientError extends Error {
    override name = this.constructor.name;
    status = 400;
    override message = 'Client error';
}

export class NotFoundError extends Error {
    override name = this.constructor.name;
    status = 404;
    override message = 'Resource not found';
}

export class ConflictError extends Error {
    override name = this.constructor.name;
    status = 409;
    override message = 'The requested operation results in a conflict, please retry';
}

export class AuthenticationRequiredError extends Error {
    override name = this.constructor.name;
    status = 401;
    override message = 'Authentication is required';
}

export class InvalidAuthenticationError extends Error {
    override name = this.constructor.name;
    status = 401;
    override message = 'Invalid authentication';
}

export class AccessDeniedError extends Error {
    override name = this.constructor.name;
    status = 403;
    override message = 'Access denied';
}

export class ServerError extends Error {
    override name = this.constructor.name;
    status = 500;
    override message = 'The request cannot be processed';
}

export class InvalidStateError extends Error {
    override name = this.constructor.name;
    status = 500;
    override message = 'Invalid state';
}

export class InitializationError extends Error {
    override name = this.constructor.name;
    status = 500;
    override message = 'Initialization error';
}
