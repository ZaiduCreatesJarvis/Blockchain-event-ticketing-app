import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from "openapi-client-axios"

declare namespace Components {
  namespace Responses {
    export type BadRequest = Schemas.Error
    export type Forbidden = Schemas.Error
    export type InternalServerError = Schemas.Error
    export type NotFound = Schemas.Error
    export type TooManyRequests = Schemas.Error
    export type Unauthorized = Schemas.Error
  }
  namespace Schemas {
    export type Content = string
    export interface CreateArtist {
      pictureIdUpload: /* The unique identifier */ Id
      name: Name
      description: Description
    }
    export interface CreateEvent {
      idSubcategory: /* The unique identifier */ Id
      cityName: Name
      statuteIdUpload: null | /* The unique identifier */ Id
      nftImageIdUpload: null | /* The unique identifier */ Id
      name: LongName
      tags: Tags
      description: Description
      video: null | Url /* url */
      ticketPrice: /**
       * Price of ticket in Wei units
       * example:
       * 1000000000000000000.00
       */
      Price /* ^\d+(.\d{1,2})?$ */
      ticketCount: number
      maxTicketsPerUser: number
      location: LongName
      street: Name
      postalCode: PostalCode /* ^\d{2}-\d{3}$ */
      start: DateTime /* date-time */
      publish: DateTime /* date-time */
      draft: boolean
      transferable: boolean
      /**
       * First image is the main image of event
       */
      images: [
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?
      ]
      artists: [
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?
      ]
    }
    export interface CreateReview {
      title: Name
      eventLocation: LongName
      eventDate: Date /* date */
      content: Content
      rate: Rate
    }
    export interface CreateUpload {
      file: string // binary
      type: UploadType
    }
    export type Date = string // date
    export type DateTime = string // date-time
    export type Description = string
    export type Email = string // email
    export interface Error {
      /**
       * A human readable error message
       */
      message: string
    }
    export interface GetArtist {
      idArtist: /* The unique identifier */ Id
      pictureIdUpload: Id
      pictureUrl: Url /* url */
      name: Name
      description: Description
      /**
       * List of events in which the artist will perform
       */
      events: ListEvents
      /**
       * List of approved artist's performance reviews
       */
      reviews: ListReviews
    }
    export interface GetEvent {
      idEvent: /* The unique identifier */ Id
      creatorIdUser: /* The unique identifier */ Id
      creatorUsername: Name
      idSubcategory: /* The unique identifier */ Id
      subcategoryName: Name
      idCity: /* The unique identifier */ Id
      cityName: Name
      statuteIdUpload: null | /* The unique identifier */ Id
      statuteUrl: null | Url /* url */
      nftImageIdUpload?: null | /* The unique identifier */ Id
      nftImageUrl?: null | Url /* url */
      name: LongName
      tags?: Tags
      description: Description
      contractAddress: null | /* Ethereum public address */ PublicAddress /* ^0x[0-9a-fA-F]{40}$ */
      video: null | Url /* url */
      ticketPrice: /**
       * Price of ticket in Wei units
       * example:
       * 1000000000000000000.00
       */
      Price /* ^\d+(.\d{1,2})?$ */
      ticketCount?: number
      maxTicketsPerUser?: number
      remainingTicketCount: number
      remainingTicketsPerUser: number
      location: LongName
      street: Name
      postalCode: PostalCode /* ^\d{2}-\d{3}$ */
      start: DateTime /* date-time */
      publish?: DateTime /* date-time */
      draft?: boolean
      likes: number
      transferable: boolean
      created: DateTime /* date-time */
      images: {
        idUpload: /* The unique identifier */ Id
        url: Url /* url */
      }[]
      artists: ListArtists
    }
    export interface GetReview {
      idReview: /* The unique identifier */ Id
      reviewerIdUser: /* The unique identifier */ Id
      reviewedIdArtist: /* The unique identifier */ Id
      title: Name
      eventLocation: LongName
      eventDate: Date /* date */
      content: Content
      rate: Rate
      created: DateTime /* date-time */
    }
    export interface GetToken {
      name: Name
      description: Description
      image?: Url /* url */
      external_url: Url /* url */
      attributes: {
        /**
         * example:
         * date
         */
        display_type: string
        /**
         * example:
         * Created
         */
        trait_type: string
        /**
         * example:
         * 1717236000
         */
        value: string | number
      }[]
    }
    export interface GetUpload {
      idUpload: /* The unique identifier */ Id
      url: string // url
      type: UploadType
    }
    export interface GetUser {
      idUser: /* The unique identifier */ Id
      publicAddress: /* Ethereum public address */ PublicAddress /* ^0x[0-9a-fA-F]{40}$ */
      email: Email /* email */
      username: Name
      name: Name
      surname: Name
      birthdate: Date /* date */
      role: UserRole
      created: DateTime /* date-time */
    }
    /**
     * The unique identifier
     */
    export type Id = number
    /**
     * JSON Web Token
     */
    export type JWT = string
    export type ListArtists = {
      idArtist: /* The unique identifier */ Id
      pictureUrl: Url /* url */
      name: Name
    }[]
    export type ListCategories = {
      idCategory: /* The unique identifier */ Id
      name: Name
      subcategories: {
        idSubcategory: /* The unique identifier */ Id
        name: Name
      }[]
    }[]
    export type ListCities = {
      idCity: /* The unique identifier */ Id
      name: Name
    }[]
    export type ListEvents = {
      idEvent: /* The unique identifier */ Id
      creatorIdUser: /* The unique identifier */ Id
      creatorUsername: Name
      idSubcategory: /* The unique identifier */ Id
      subcategoryName: Name
      idCity: /* The unique identifier */ Id
      cityName: Name
      name: LongName
      ticketPrice: /**
       * Price of ticket in Wei units
       * example:
       * 1000000000000000000.00
       */
      Price /* ^\d+(.\d{1,2})?$ */
      remainingTicketCount: number
      location: LongName
      start: DateTime /* date-time */
      draft?: boolean
      likes: number
      transferable: boolean
      created: DateTime /* date-time */
      image: null | Url /* url */
    }[]
    export type ListReviews = {
      idReview: /* The unique identifier */ Id
      reviewerIdUser: /* The unique identifier */ Id
      reviewerUsername: Name
      reviewedIdArtist: /* The unique identifier */ Id
      reviewedName: Name
      title: Name
      eventLocation: LongName
      eventDate: Date /* date */
      content: Content
      rate: Rate
      created: DateTime /* date-time */
    }[]
    export type ListTickets = {
      idTicket: /* The unique identifier */ Id
      idEvent: /* The unique identifier */ Id
      eventName: LongName
      idUser: /* The unique identifier */ Id
      email: Email /* email */
      username: Name
      tokenId: /* The unique identifier of the token */ TokenId
      ticketAddress: /* Ethereum public address */ PublicAddress /* ^0x[0-9a-fA-F]{40}$ */
      ticketPrice: /**
       * Price of ticket in Wei units
       * example:
       * 1000000000000000000.00
       */
      Price /* ^\d+(.\d{1,2})?$ */
      ticketUsed: boolean
      created: DateTime /* date-time */
    }[]
    export type ListUserTickets = {
      idTicket: /* The unique identifier */ Id
      idEvent: /* The unique identifier */ Id
      eventName: LongName
      tokenId: /* The unique identifier of the token */ TokenId
      ticketAddress: /* Ethereum public address */ PublicAddress /* ^0x[0-9a-fA-F]{40}$ */
      ticketPrice: /**
       * Price of ticket in Wei units
       * example:
       * 1000000000000000000.00
       */
      Price /* ^\d+(.\d{1,2})?$ */
      transferable: boolean
      ticketUsed: boolean
      created: DateTime /* date-time */
    }[]
    export type ListUsers = {
      idUser: /* The unique identifier */ Id
      publicAddress: /* Ethereum public address */ PublicAddress /* ^0x[0-9a-fA-F]{40}$ */
      email: Email /* email */
      username: Name
      role: UserRole
      active: boolean
      created: DateTime /* date-time */
    }[]
    export type LongName = string
    export type Name = string
    /**
     * Cryptographic nonce
     */
    export type Nonce = string
    /**
     * A listing page number
     */
    export type Page = number
    export type PostalCode = string // ^\d{2}-\d{3}$
    /**
     * Price of ticket in Wei units
     * example:
     * 1000000000000000000.00
     */
    export type Price = string // ^\d+(.\d{1,2})?$
    /**
     * Ethereum public address
     */
    export type PublicAddress = string // ^0x[0-9a-fA-F]{40}$
    export type Rate = number
    export interface SalesReport {
      /**
       * Daily income for every day up to 30 days
       */
      dailyIncome: {
        idEvent: /* The unique identifier */ Id
        eventName: Name
        /**
         * Calendar year, month and day - yyyy-MM-dd
         * example:
         * 2024-06-03
         */
        date: string
        income: /**
         * Price of ticket in Wei units
         * example:
         * 1000000000000000000.00
         */
        Price /* ^\d+(.\d{1,2})?$ */
        ticketCount: number
      }[]
      /**
       * Monthly income for every month up to 12 months
       */
      monthlyIncome: {
        idEvent: /* The unique identifier */ Id
        eventName: Name
        /**
         * Calendar year and month - yyyy-MM
         * example:
         * 2024-06
         */
        date: string
        income: /**
         * Price of ticket in Wei units
         * example:
         * 1000000000000000000.00
         */
        Price /* ^\d+(.\d{1,2})?$ */
        ticketCount: number
      }[]
      /**
       * Annual income for every year up to 5 years
       */
      annualIncome: {
        idEvent: /* The unique identifier */ Id
        eventName: Name
        /**
         * Calendar year - yyyy
         * example:
         * 2024
         */
        date: string
        income: /**
         * Price of ticket in Wei units
         * example:
         * 1000000000000000000.00
         */
        Price /* ^\d+(.\d{1,2})?$ */
        ticketCount: number
      }[]
      /**
       * Ticket count by category including summary
       */
      ticketCountByCategory: {
        idCategory: null | /* The unique identifier */ Id
        categoryName: null | Name
        ticketCount: number
      }[]
    }
    export type Tags = string
    export interface TicketVerificationResult {
      hasTicket: boolean
      isTicketUsed: null | boolean
      user: null | GetUser
    }
    /**
     * The unique identifier of the token
     */
    export type TokenId = number
    /**
     * Version 4 UUID
     */
    export type UUID = string // ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
    export type UpdateArtist = CreateArtist
    export interface UpdateEvent {
      idSubcategory: /* The unique identifier */ Id
      cityName: Name
      statuteIdUpload: null | /* The unique identifier */ Id
      nftImageIdUpload: null | /* The unique identifier */ Id
      tags: Tags
      description: Description
      video: null | Url /* url */
      location: LongName
      street: Name
      postalCode: PostalCode /* ^\d{2}-\d{3}$ */
      start: DateTime /* date-time */
      draft: boolean
      /**
       * First image is the main image of event
       */
      images: [
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?
      ]
      artists: [
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?,
        /* The unique identifier */ Id?
      ]
    }
    export interface UpdateUser {
      name: Name
      surname: Name
      birthdate: Date /* date */
    }
    export interface UpdateUserRole {
      role: UserRole
    }
    export type UploadType = "FILE" | "IMAGE"
    export type Url = string // url
    export type UserRole = "USER" | "EVENTS_ORGANIZER" | "ADMINISTRATOR"
  }
}
declare namespace Paths {
  namespace ActivateUser {
    export interface RequestBody {
      activationToken: /* JSON Web Token */ Components.Schemas.JWT
    }
    namespace Responses {
      export interface $204 {}
      export type $400 = Components.Responses.BadRequest
      export type $429 = Components.Responses.TooManyRequests
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ActiveTicketVerification {
    export interface RequestBody {
      uuid: /* Version 4 UUID */ Components.Schemas.UUID /* ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
    }
    namespace Responses {
      export type $200 = Components.Schemas.TicketVerificationResult
      export interface $204 {}
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ApproveActiveTicketVerification {
    export interface RequestBody {
      uuid: /* Version 4 UUID */ Components.Schemas.UUID /* ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$ */
      /**
       * ECDSA private key signature of uuid
       */
      signature: string
    }
    namespace Responses {
      export interface $204 {}
      export type $400 = Components.Responses.BadRequest
      export type $429 = Components.Responses.TooManyRequests
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ApproveEvent {
    namespace Responses {
      export interface $204 {}
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ApproveReview {
    namespace Responses {
      export interface $204 {}
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace Artists$Id {
    namespace Parameters {
      export type Id = /* The unique identifier */ Components.Schemas.Id
    }
    export interface PathParameters {
      id: Parameters.Id
    }
  }
  namespace Artists$IdFollow {
    namespace Parameters {
      export type Id = /* The unique identifier */ Components.Schemas.Id
    }
    export interface PathParameters {
      id: Parameters.Id
    }
  }
  namespace Artists$IdReview {
    namespace Parameters {
      export type Id = /* The unique identifier */ Components.Schemas.Id
    }
    export interface PathParameters {
      id: Parameters.Id
    }
  }
  namespace CreateArtist {
    export type RequestBody = Components.Schemas.CreateArtist
    namespace Responses {
      export type $201 = Components.Schemas.GetArtist
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace CreateEvent {
    export type RequestBody = Components.Schemas.CreateEvent
    namespace Responses {
      export type $201 = Components.Schemas.GetEvent
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type $429 = Components.Responses.TooManyRequests
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace CreateReview {
    export type RequestBody = Components.Schemas.CreateReview
    namespace Responses {
      export type $201 = Components.Schemas.GetReview
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type $429 = Components.Responses.TooManyRequests
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace CreateUpload {
    export type RequestBody = Components.Schemas.CreateUpload
    namespace Responses {
      export type $201 = Components.Schemas.GetUpload
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type $429 = Components.Responses.TooManyRequests
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace DeleteEvent {
    namespace Responses {
      export interface $204 {}
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace DeleteReview {
    namespace Responses {
      export interface $204 {}
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace Events$Id {
    namespace Parameters {
      export type Id = /* The unique identifier */ Components.Schemas.Id
    }
    export interface PathParameters {
      id: Parameters.Id
    }
  }
  namespace Events$IdApprove {
    namespace Parameters {
      export type Id = /* The unique identifier */ Components.Schemas.Id
    }
    export interface PathParameters {
      id: Parameters.Id
    }
  }
  namespace Events$IdLike {
    namespace Parameters {
      export type Id = /* The unique identifier */ Components.Schemas.Id
    }
    export interface PathParameters {
      id: Parameters.Id
    }
  }
  namespace Events$IdTickets$TokenId {
    namespace Parameters {
      export type Id = /* The unique identifier */ Components.Schemas.Id
      export type TokenId = /* The unique identifier of the token */ Components.Schemas.TokenId
    }
    export interface PathParameters {
      id: Parameters.Id
      tokenId: Parameters.TokenId
    }
  }
  namespace Events$IdTicketsSubscribe {
    namespace Parameters {
      export type Id = /* The unique identifier */ Components.Schemas.Id
    }
    export interface PathParameters {
      id: Parameters.Id
    }
  }
  namespace Events$IdTicketsVerify {
    namespace Parameters {
      export type Id = /* The unique identifier */ Components.Schemas.Id
    }
    export interface PathParameters {
      id: Parameters.Id
    }
  }
  namespace FollowArtist {
    namespace Responses {
      export interface $204 {}
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace GenerateNonce {
    export interface RequestBody {
      publicAddress: /* Ethereum public address */ Components.Schemas.PublicAddress /* ^0x[0-9a-fA-F]{40}$ */
    }
    namespace Responses {
      export interface $200 {
        nonce: /* Cryptographic nonce */ Components.Schemas.Nonce
      }
      export type $400 = Components.Responses.BadRequest
      export interface $404 {
        signUpToken: /* JSON Web Token */ Components.Schemas.JWT
      }
      export type $429 = Components.Responses.TooManyRequests
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace GetArtist {
    namespace Responses {
      export type $200 = Components.Schemas.GetArtist
      export type $404 = Components.Responses.NotFound
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace GetEvent {
    namespace Responses {
      export type $200 = Components.Schemas.GetEvent
      export type $404 = Components.Responses.NotFound
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace GetMe {
    namespace Responses {
      export type $200 = Components.Schemas.GetUser
      export type $401 = Components.Responses.Unauthorized
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace GetSalesReport {
    namespace Responses {
      export type $200 = Components.Schemas.SalesReport
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace GetToken {
    namespace Responses {
      export type $200 = Components.Schemas.GetToken
      export type $404 = Components.Responses.NotFound
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace LikeEvent {
    namespace Responses {
      export interface $204 {}
      export type $400 = Components.Responses.BadRequest
      export type $429 = Components.Responses.TooManyRequests
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ListArtists {
    namespace Parameters {
      export type Page = /* A listing page number */ Components.Schemas.Page
      export type Search = string
    }
    export interface QueryParameters {
      search?: Parameters.Search
      page?: Parameters.Page
    }
    namespace Responses {
      export interface $200 {
        count: number
        pages: number
        currentPage: number
        results: Components.Schemas.ListArtists
      }
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ListCategories {
    namespace Responses {
      export type $200 = Components.Schemas.ListCategories
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ListCities {
    namespace Responses {
      export type $200 = Components.Schemas.ListCities
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ListEvents {
    namespace Parameters {
      export type IdCity = /* The unique identifier */ Components.Schemas.Id
      export type IdSubcategory = /* The unique identifier */ Components.Schemas.Id
      export type Page = /* A listing page number */ Components.Schemas.Page
      export type Search = string
      export type Sort =
        | "NEWEST"
        | "LOWEST_PRICE"
        | "HIGHEST_PRICE"
        | "MOST_LIKES"
        | "STARTING_SOON"
    }
    export interface QueryParameters {
      search?: Parameters.Search
      idSubcategory?: Parameters.IdSubcategory
      idCity?: Parameters.IdCity
      sort?: Parameters.Sort
      page?: Parameters.Page
    }
    namespace Responses {
      export interface $200 {
        count: number
        pages: number
        currentPage: number
        results: Components.Schemas.ListEvents
      }
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ListEventsToApprove {
    namespace Parameters {
      export type Page = /* A listing page number */ Components.Schemas.Page
    }
    export interface QueryParameters {
      page?: Parameters.Page
    }
    namespace Responses {
      export interface $200 {
        count: number
        pages: number
        currentPage: number
        results: Components.Schemas.ListEvents
      }
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ListReviewsToApprove {
    namespace Parameters {
      export type Page = /* A listing page number */ Components.Schemas.Page
    }
    export interface QueryParameters {
      page?: Parameters.Page
    }
    namespace Responses {
      export interface $200 {
        count: number
        pages: number
        currentPage: number
        results: Components.Schemas.ListReviews
      }
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ListUserEvents {
    namespace Parameters {
      export type IdCity = /* The unique identifier */ Components.Schemas.Id
      export type IdSubcategory = /* The unique identifier */ Components.Schemas.Id
      export type Page = /* A listing page number */ Components.Schemas.Page
      export type Search = string
    }
    export interface QueryParameters {
      search?: Parameters.Search
      idSubcategory?: Parameters.IdSubcategory
      idCity?: Parameters.IdCity
      page?: Parameters.Page
    }
    namespace Responses {
      export interface $200 {
        count: number
        pages: number
        currentPage: number
        results: Components.Schemas.ListEvents
      }
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ListUserEventsTickets {
    namespace Responses {
      export type $200 = Components.Schemas.ListTickets
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ListUserFollowedArtists {
    namespace Responses {
      export type $200 = Components.Schemas.ListArtists
      export type $401 = Components.Responses.Unauthorized
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ListUserTickets {
    namespace Responses {
      export type $200 = Components.Schemas.ListUserTickets
      export type $401 = Components.Responses.Unauthorized
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace ListUsers {
    namespace Parameters {
      export type Page = /* A listing page number */ Components.Schemas.Page
      export type Search = string
    }
    export interface QueryParameters {
      search?: Parameters.Search
      page?: Parameters.Page
    }
    namespace Responses {
      export interface $200 {
        count: number
        pages: number
        currentPage: number
        results: Components.Schemas.ListUsers
      }
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace PassiveTicketVerification {
    export interface RequestBody {
      publicAddress: /* Ethereum public address */ Components.Schemas.PublicAddress /* ^0x[0-9a-fA-F]{40}$ */
    }
    namespace Responses {
      export type $200 = Components.Schemas.TicketVerificationResult
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace RefreshTokens {
    export interface RequestBody {
      refreshToken: /* JSON Web Token */ Components.Schemas.JWT
    }
    namespace Responses {
      export interface $200 {
        authenticationToken: /* JSON Web Token */ Components.Schemas.JWT
        refreshToken: /* JSON Web Token */ Components.Schemas.JWT
      }
      export type $400 = Components.Responses.BadRequest
      export type $429 = Components.Responses.TooManyRequests
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace Reviews$Id {
    namespace Parameters {
      export type Id = /* The unique identifier */ Components.Schemas.Id
    }
    export interface PathParameters {
      id: Parameters.Id
    }
  }
  namespace Reviews$IdApprove {
    namespace Parameters {
      export type Id = /* The unique identifier */ Components.Schemas.Id
    }
    export interface PathParameters {
      id: Parameters.Id
    }
  }
  namespace SignIn {
    export interface RequestBody {
      message: string
      /**
       * ECDSA private key signature of message
       */
      signature: string
    }
    namespace Responses {
      export interface $200 {
        authenticationToken: /* JSON Web Token */ Components.Schemas.JWT
        refreshToken: /* JSON Web Token */ Components.Schemas.JWT
      }
      export type $400 = Components.Responses.BadRequest
      export type $429 = Components.Responses.TooManyRequests
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace SignUp {
    export interface RequestBody {
      signUpToken: /* JSON Web Token */ Components.Schemas.JWT
      email: Components.Schemas.Email /* email */
      username: Components.Schemas.Name
      name: Components.Schemas.Name
      surname: Components.Schemas.Name
      birthdate: Components.Schemas.Date /* date */
    }
    namespace Responses {
      export interface $204 {}
      export type $400 = Components.Responses.BadRequest
      export type $429 = Components.Responses.TooManyRequests
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace UnfollowArtist {
    namespace Responses {
      export interface $204 {}
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace UpdateArtist {
    export type RequestBody = Components.Schemas.CreateArtist
    namespace Responses {
      export type $200 = Components.Schemas.GetArtist
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace UpdateEvent {
    export type RequestBody = Components.Schemas.UpdateEvent
    namespace Responses {
      export type $200 = Components.Schemas.GetEvent
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace UpdateUser {
    export type RequestBody = Components.Schemas.UpdateUser
    namespace Responses {
      export type $200 = Components.Schemas.GetUser
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace UpdateUserRole {
    export type RequestBody = Components.Schemas.UpdateUserRole
    namespace Responses {
      export type $200 = Components.Schemas.GetUser
      export type $400 = Components.Responses.BadRequest
      export type $401 = Components.Responses.Unauthorized
      export type $403 = Components.Responses.Forbidden
      export type Default = Components.Responses.InternalServerError
    }
  }
  namespace Users$Id {
    namespace Parameters {
      export type Id = /* The unique identifier */ Components.Schemas.Id
    }
    export interface PathParameters {
      id: Parameters.Id
    }
  }
}

export interface OperationMethods {
  /**
   * ListArtists - List available artists
   */
  "ListArtists"(
    parameters?: Parameters<Paths.ListArtists.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ListArtists.Responses.$200>
  /**
   * CreateArtist - Create new artist
   */
  "CreateArtist"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateArtist.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.CreateArtist.Responses.$201>
  /**
   * GetArtist - Get artist details
   */
  "GetArtist"(
    parameters?: Parameters<Paths.Artists$Id.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetArtist.Responses.$200>
  /**
   * UpdateArtist - Update artist details
   */
  "UpdateArtist"(
    parameters?: Parameters<Paths.Artists$Id.PathParameters> | null,
    data?: Paths.UpdateArtist.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.UpdateArtist.Responses.$200>
  /**
   * CreateReview - Create artist's performance review
   */
  "CreateReview"(
    parameters?: Parameters<Paths.Artists$IdReview.PathParameters> | null,
    data?: Paths.CreateReview.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.CreateReview.Responses.$201>
  /**
   * FollowArtist - Follow artist
   */
  "FollowArtist"(
    parameters?: Parameters<Paths.Artists$IdFollow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.FollowArtist.Responses.$204>
  /**
   * UnfollowArtist - Unfollow artist
   */
  "UnfollowArtist"(
    parameters?: Parameters<Paths.Artists$IdFollow.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.UnfollowArtist.Responses.$204>
  /**
   * ListCategories - List available categories
   */
  "ListCategories"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ListCategories.Responses.$200>
  /**
   * ListCities - List available cities
   */
  "ListCities"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ListCities.Responses.$200>
  /**
   * ListEvents - List approved events
   */
  "ListEvents"(
    parameters?: Parameters<Paths.ListEvents.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ListEvents.Responses.$200>
  /**
   * CreateEvent - Create new event
   */
  "CreateEvent"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateEvent.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.CreateEvent.Responses.$201>
  /**
   * ListEventsToApprove - List events to approve
   */
  "ListEventsToApprove"(
    parameters?: Parameters<Paths.ListEventsToApprove.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ListEventsToApprove.Responses.$200>
  /**
   * GetEvent - Get event details
   */
  "GetEvent"(
    parameters?: Parameters<Paths.Events$Id.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetEvent.Responses.$200>
  /**
   * UpdateEvent - Update event details
   */
  "UpdateEvent"(
    parameters?: Parameters<Paths.Events$Id.PathParameters> | null,
    data?: Paths.UpdateEvent.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.UpdateEvent.Responses.$200>
  /**
   * DeleteEvent - Delete event
   */
  "DeleteEvent"(
    parameters?: Parameters<Paths.Events$Id.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DeleteEvent.Responses.$204>
  /**
   * ApproveEvent - Approve event
   */
  "ApproveEvent"(
    parameters?: Parameters<Paths.Events$IdApprove.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ApproveEvent.Responses.$204>
  /**
   * LikeEvent - Like event
   */
  "LikeEvent"(
    parameters?: Parameters<Paths.Events$IdLike.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.LikeEvent.Responses.$204>
  /**
   * PassiveTicketVerification - Passive ticket verification
   */
  "PassiveTicketVerification"(
    parameters?: Parameters<Paths.Events$IdTicketsVerify.PathParameters> | null,
    data?: Paths.PassiveTicketVerification.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.PassiveTicketVerification.Responses.$200>
  /**
   * ActiveTicketVerification - Subscribe for active ticket verification, long polling - 15 seconds timeout
   */
  "ActiveTicketVerification"(
    parameters?: Parameters<Paths.Events$IdTicketsSubscribe.PathParameters> | null,
    data?: Paths.ActiveTicketVerification.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<
    Paths.ActiveTicketVerification.Responses.$200 | Paths.ActiveTicketVerification.Responses.$204
  >
  /**
   * GetToken - Get token metadata
   */
  "GetToken"(
    parameters?: Parameters<Paths.Events$IdTickets$TokenId.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetToken.Responses.$200>
  /**
   * CreateUpload - Create new upload
   */
  "CreateUpload"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateUpload.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.CreateUpload.Responses.$201>
  /**
   * ListUsers - List available users
   */
  "ListUsers"(
    parameters?: Parameters<Paths.ListUsers.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ListUsers.Responses.$200>
  /**
   * GenerateNonce - Generate nonce for user with provided wallet address
   */
  "GenerateNonce"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.GenerateNonce.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GenerateNonce.Responses.$200>
  /**
   * SignUp - Sign up user account
   */
  "SignUp"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SignUp.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.SignUp.Responses.$204>
  /**
   * ActivateUser - Activate user account
   */
  "ActivateUser"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ActivateUser.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ActivateUser.Responses.$204>
  /**
   * SignIn - Sign in user
   */
  "SignIn"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SignIn.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.SignIn.Responses.$200>
  /**
   * RefreshTokens - Refresh JWT tokens pair
   */
  "RefreshTokens"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.RefreshTokens.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.RefreshTokens.Responses.$200>
  /**
   * UpdateUserRole - Update user role
   */
  "UpdateUserRole"(
    parameters?: Parameters<Paths.Users$Id.PathParameters> | null,
    data?: Paths.UpdateUserRole.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.UpdateUserRole.Responses.$200>
  /**
   * ListUserEvents - List events created by currently signed in user
   */
  "ListUserEvents"(
    parameters?: Parameters<Paths.ListUserEvents.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ListUserEvents.Responses.$200>
  /**
   * ListUserEventsTickets - List tickets from events created by currently signed in user
   */
  "ListUserEventsTickets"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ListUserEventsTickets.Responses.$200>
  /**
   * GetSalesReport - Get currently signed in user sales report details
   */
  "GetSalesReport"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetSalesReport.Responses.$200>
  /**
   * GetMe - Get currently signed in user details
   */
  "GetMe"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.GetMe.Responses.$200>
  /**
   * UpdateUser - Update currently signed in user details
   */
  "UpdateUser"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UpdateUser.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.UpdateUser.Responses.$200>
  /**
   * ListUserTickets - List currently signed in user tickets
   */
  "ListUserTickets"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ListUserTickets.Responses.$200>
  /**
   * ListUserFollowedArtists - Get currently signed in user followed artists
   */
  "ListUserFollowedArtists"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ListUserFollowedArtists.Responses.$200>
  /**
   * ListReviewsToApprove - List reviews to approve
   */
  "ListReviewsToApprove"(
    parameters?: Parameters<Paths.ListReviewsToApprove.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ListReviewsToApprove.Responses.$200>
  /**
   * DeleteReview - Delete review
   */
  "DeleteReview"(
    parameters?: Parameters<Paths.Reviews$Id.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.DeleteReview.Responses.$204>
  /**
   * ApproveReview - Approve review
   */
  "ApproveReview"(
    parameters?: Parameters<Paths.Reviews$IdApprove.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ApproveReview.Responses.$204>
  /**
   * ApproveActiveTicketVerification - Approve active ticket verification
   */
  "ApproveActiveTicketVerification"(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ApproveActiveTicketVerification.RequestBody,
    config?: AxiosRequestConfig
  ): OperationResponse<Paths.ApproveActiveTicketVerification.Responses.$204>
}

export interface PathsDictionary {
  ["/artists"]: {
    /**
     * ListArtists - List available artists
     */
    "get"(
      parameters?: Parameters<Paths.ListArtists.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ListArtists.Responses.$200>
    /**
     * CreateArtist - Create new artist
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateArtist.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.CreateArtist.Responses.$201>
  }
  ["/artists/{id}"]: {
    /**
     * GetArtist - Get artist details
     */
    "get"(
      parameters?: Parameters<Paths.Artists$Id.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetArtist.Responses.$200>
    /**
     * UpdateArtist - Update artist details
     */
    "patch"(
      parameters?: Parameters<Paths.Artists$Id.PathParameters> | null,
      data?: Paths.UpdateArtist.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.UpdateArtist.Responses.$200>
  }
  ["/artists/{id}/review"]: {
    /**
     * CreateReview - Create artist's performance review
     */
    "post"(
      parameters?: Parameters<Paths.Artists$IdReview.PathParameters> | null,
      data?: Paths.CreateReview.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.CreateReview.Responses.$201>
  }
  ["/artists/{id}/follow"]: {
    /**
     * FollowArtist - Follow artist
     */
    "post"(
      parameters?: Parameters<Paths.Artists$IdFollow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.FollowArtist.Responses.$204>
    /**
     * UnfollowArtist - Unfollow artist
     */
    "delete"(
      parameters?: Parameters<Paths.Artists$IdFollow.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.UnfollowArtist.Responses.$204>
  }
  ["/categories"]: {
    /**
     * ListCategories - List available categories
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ListCategories.Responses.$200>
  }
  ["/cities"]: {
    /**
     * ListCities - List available cities
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ListCities.Responses.$200>
  }
  ["/events"]: {
    /**
     * ListEvents - List approved events
     */
    "get"(
      parameters?: Parameters<Paths.ListEvents.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ListEvents.Responses.$200>
    /**
     * CreateEvent - Create new event
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateEvent.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.CreateEvent.Responses.$201>
  }
  ["/events/to-approve"]: {
    /**
     * ListEventsToApprove - List events to approve
     */
    "get"(
      parameters?: Parameters<Paths.ListEventsToApprove.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ListEventsToApprove.Responses.$200>
  }
  ["/events/{id}"]: {
    /**
     * GetEvent - Get event details
     */
    "get"(
      parameters?: Parameters<Paths.Events$Id.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetEvent.Responses.$200>
    /**
     * UpdateEvent - Update event details
     */
    "patch"(
      parameters?: Parameters<Paths.Events$Id.PathParameters> | null,
      data?: Paths.UpdateEvent.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.UpdateEvent.Responses.$200>
    /**
     * DeleteEvent - Delete event
     */
    "delete"(
      parameters?: Parameters<Paths.Events$Id.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DeleteEvent.Responses.$204>
  }
  ["/events/{id}/approve"]: {
    /**
     * ApproveEvent - Approve event
     */
    "post"(
      parameters?: Parameters<Paths.Events$IdApprove.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ApproveEvent.Responses.$204>
  }
  ["/events/{id}/like"]: {
    /**
     * LikeEvent - Like event
     */
    "post"(
      parameters?: Parameters<Paths.Events$IdLike.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.LikeEvent.Responses.$204>
  }
  ["/events/{id}/tickets/verify"]: {
    /**
     * PassiveTicketVerification - Passive ticket verification
     */
    "post"(
      parameters?: Parameters<Paths.Events$IdTicketsVerify.PathParameters> | null,
      data?: Paths.PassiveTicketVerification.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.PassiveTicketVerification.Responses.$200>
  }
  ["/events/{id}/tickets/subscribe"]: {
    /**
     * ActiveTicketVerification - Subscribe for active ticket verification, long polling - 15 seconds timeout
     */
    "post"(
      parameters?: Parameters<Paths.Events$IdTicketsSubscribe.PathParameters> | null,
      data?: Paths.ActiveTicketVerification.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<
      Paths.ActiveTicketVerification.Responses.$200 | Paths.ActiveTicketVerification.Responses.$204
    >
  }
  ["/events/{id}/tickets/{tokenId}"]: {
    /**
     * GetToken - Get token metadata
     */
    "get"(
      parameters?: Parameters<Paths.Events$IdTickets$TokenId.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetToken.Responses.$200>
  }
  ["/uploads"]: {
    /**
     * CreateUpload - Create new upload
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateUpload.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.CreateUpload.Responses.$201>
  }
  ["/users"]: {
    /**
     * ListUsers - List available users
     */
    "get"(
      parameters?: Parameters<Paths.ListUsers.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ListUsers.Responses.$200>
  }
  ["/users/nonce"]: {
    /**
     * GenerateNonce - Generate nonce for user with provided wallet address
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GenerateNonce.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GenerateNonce.Responses.$200>
  }
  ["/users/sign-up"]: {
    /**
     * SignUp - Sign up user account
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SignUp.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.SignUp.Responses.$204>
  }
  ["/users/activate"]: {
    /**
     * ActivateUser - Activate user account
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ActivateUser.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ActivateUser.Responses.$204>
  }
  ["/users/verify"]: {
    /**
     * SignIn - Sign in user
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SignIn.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.SignIn.Responses.$200>
  }
  ["/users/refresh"]: {
    /**
     * RefreshTokens - Refresh JWT tokens pair
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.RefreshTokens.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.RefreshTokens.Responses.$200>
  }
  ["/users/{id}"]: {
    /**
     * UpdateUserRole - Update user role
     */
    "patch"(
      parameters?: Parameters<Paths.Users$Id.PathParameters> | null,
      data?: Paths.UpdateUserRole.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.UpdateUserRole.Responses.$200>
  }
  ["/users/me/events"]: {
    /**
     * ListUserEvents - List events created by currently signed in user
     */
    "get"(
      parameters?: Parameters<Paths.ListUserEvents.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ListUserEvents.Responses.$200>
  }
  ["/users/me/events/tickets"]: {
    /**
     * ListUserEventsTickets - List tickets from events created by currently signed in user
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ListUserEventsTickets.Responses.$200>
  }
  ["/users/me/sales-report"]: {
    /**
     * GetSalesReport - Get currently signed in user sales report details
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetSalesReport.Responses.$200>
  }
  ["/users/me"]: {
    /**
     * GetMe - Get currently signed in user details
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.GetMe.Responses.$200>
    /**
     * UpdateUser - Update currently signed in user details
     */
    "patch"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UpdateUser.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.UpdateUser.Responses.$200>
  }
  ["/users/me/tickets"]: {
    /**
     * ListUserTickets - List currently signed in user tickets
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ListUserTickets.Responses.$200>
  }
  ["/users/me/following"]: {
    /**
     * ListUserFollowedArtists - Get currently signed in user followed artists
     */
    "get"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ListUserFollowedArtists.Responses.$200>
  }
  ["/reviews/to-approve"]: {
    /**
     * ListReviewsToApprove - List reviews to approve
     */
    "get"(
      parameters?: Parameters<Paths.ListReviewsToApprove.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ListReviewsToApprove.Responses.$200>
  }
  ["/reviews/{id}"]: {
    /**
     * DeleteReview - Delete review
     */
    "delete"(
      parameters?: Parameters<Paths.Reviews$Id.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.DeleteReview.Responses.$204>
  }
  ["/reviews/{id}/approve"]: {
    /**
     * ApproveReview - Approve review
     */
    "post"(
      parameters?: Parameters<Paths.Reviews$IdApprove.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ApproveReview.Responses.$204>
  }
  ["/tickets/approve"]: {
    /**
     * ApproveActiveTicketVerification - Approve active ticket verification
     */
    "post"(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ApproveActiveTicketVerification.RequestBody,
      config?: AxiosRequestConfig
    ): OperationResponse<Paths.ApproveActiveTicketVerification.Responses.$204>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
